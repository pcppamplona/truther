import CustomAppBar from "@/components/CustomAppBar";
import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { getAddressByCep } from "@/hooks/useViaCep";
import { router } from "expo-router";
import { useSignUpContext } from "@/contexts/SignUpContext";
import {
  ContentContainer,
  Title,
  Subtitle,
  Input,
  Container,
} from "././../../../styles/OnboardingStyles/RegisterStyles/SignUpHome";
import ButtonSecondary from "@/components/ButtonSecondary";

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
        placeholder="Neighborhood"
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
