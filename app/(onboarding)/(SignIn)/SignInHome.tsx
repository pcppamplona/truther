import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";
import ButtonSecondary from "@/components/ButtonSecondary";
import { AuthContext, useAuthContext } from "@/contexts/AuthContext"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
;

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
  margin-top: 60px;
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
