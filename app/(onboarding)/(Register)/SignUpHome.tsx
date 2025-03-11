import CustomAppBar from "@/components/CustomAppBar";
import React, { useState } from "react";
import styled from "styled-components/native";
import ButtonSecondary from "@/components/ButtonSecondary";
import { ActivityIndicator } from "react-native";
import { getAddressByCep } from "@/hooks/useViaCep";
import { router } from "expo-router";
import { useSignUpContext } from "@/contexts/SignUpContext";

export default function SignUpHome() {
  const { updateUserData } = useSignUpContext();

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [estado, setEstado] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCepChange = async (inputCep: string) => {
    setCep(inputCep);

    const unmaskCep = inputCep.replace(/\D/g, "");

    if (unmaskCep.length === 8) {
      setLoading(true);

      try {
        const addressData = await getAddressByCep(unmaskCep);
        setLogradouro(addressData.logradouro);
        setBairro(addressData.bairro);
        setLocalidade(addressData.localidade);
        setEstado(addressData.estado);
      } catch (error) {
        console.error("Erro ao buscar o CEP", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleNext = () => {
    updateUserData({
      address: { cep, street: logradouro, neighborhood: bairro, city: localidade, state: estado },
    });
    router.navigate("/(onboarding)/(Register)/SignUpPin");
  };

  return (
    <ContentContainer>
      <CustomAppBar />

      <Title>Create your PIN</Title>
      <Subtitle>Create a four-digit passcode to secure your account</Subtitle>

      <Input
        placeholder="Zipcode"
        value={cep}
        onChangeText={handleCepChange}
        keyboardType="number-pad"
      />

      <Input
        placeholder="Street address"
        value={logradouro}
        editable={false} 
        renderInput={() =>
          loading && <ActivityIndicator size="small" color="#000" />
        }
        keyboardType="number-pad"
      />
      <Input
        placeholder="neighborhood"
        value={bairro}
        editable={false}
        renderInput={() =>
          loading && <ActivityIndicator size="small" color="#000" />
        }
      />

      <Input
        placeholder="City"
        value={localidade}
        editable={false}
        renderInput={() =>
          loading && <ActivityIndicator size="small" color="#000" />
        }
      />
      <Input
        placeholder="State"
        value={estado}
        editable={false}
        renderInput={() =>
          loading && <ActivityIndicator size="small" color="#000" />
        }
      />

      <Input
        placeholder="Apt/ Suite number"
        editable={true}
        keyboardType="number-pad"
      />

      <Container>
        <ButtonSecondary
          icon={{
            type: "AntDesign",
            name: "right",
          }}
          toggle={handleNext}
        />
      </Container>
    </ContentContainer>
  );
}

// Styled Components
const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #333;
`;

const Subtitle = styled.Text`
  width: 89%;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 25px;
  color: #333;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 70px;
  padding: 12px;
  font-weight: 700;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #ccc;
`;

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
`;
