import React, { useState, useEffect } from "react";
import { useAuthContext } from "@/contexts/AuthContext"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonSecondary from "@/components/ButtonSecondary";
import {
  ContentContainer,
  Title,
  Subtitle,
  Input,
  Container,
} from "./../../../styles/OnboardingStyles/SignInStyles/SignInHomeStyles";
export default function SignInHome() {
  const { signIn } = useAuthContext();
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signIn(firstName, password);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkStorage = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const items = await AsyncStorage.multiGet(keys);

        console.log("AsyncStorage:");
        items.forEach(([key, value]) => {
          console.log(`${key}: ${value}`);
        });
      } catch (error) {
        console.error("Erro ao acessar o AsyncStorage:", error);
      }
    };

    checkStorage();
  }, []);

  return (
    <ContentContainer>
      <Title>Welcome back</Title>
      <Subtitle>Sign in to your account</Subtitle>

      <Input
        placeholder="User Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Container>
        <ButtonSecondary
          icon={{
            type: "AntDesign",
            name: "right",
          }}
          toggle={handleSignIn}
        />
      </Container>
    </ContentContainer>
  );
}
