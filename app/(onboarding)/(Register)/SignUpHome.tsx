import CustomAppBar from "@/components/CustomAppBar";
import React, { useState } from "react";
import styled from "styled-components/native";
import ButtonSecondary from "@/components/ButtonSecondary";
import { ActivityIndicator } from "react-native";
import { getAddressByCep } from "@/hooks/useViaCep";
import { router } from "expo-router";

export default function SignUpHome() {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [estado, setEstado] = useState("");
  const [loading, setLoading] = useState(false);

  // Função para buscar o endereço via CEP
  const handleCepChange = async (inputCep: string) => {
    setCep(inputCep);

    // Remover qualquer não número do CEP
    const unmaskCep = inputCep.replace(/\D/g, "");

    // Verificar se o CEP tem o formato correto
    if (unmaskCep.length === 8) {
      setLoading(true); // Iniciar o carregamento

      try {
        const addressData = await getAddressByCep(unmaskCep);
        setLogradouro(addressData.logradouro);
        setBairro(addressData.bairro);
        setLocalidade(addressData.localidade);
        setEstado(addressData.estado);
      } catch (error) {
        console.error("Erro ao buscar o CEP", error);
      } finally {
        setLoading(false); // Finalizar o carregamento
      }
    }
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
        editable={false} // Desabilitado enquanto estamos preenchendo automaticamente
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
        editable={false}
        keyboardType="number-pad"

      />

      <Container>
        <ButtonSecondary
          icon={{
            type: "AntDesign",
            name: "right",
          }}
          toggle={() => router.navigate("/(onboarding)/(Register)/SignUpPin")}
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
