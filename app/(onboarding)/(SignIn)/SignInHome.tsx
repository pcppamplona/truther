import CustomAppBar from "@/components/CustomAppBar";
import React from "react";
import styled from "styled-components/native";
import ButtonSecondary from "@/components/ButtonSecondary";
import { router } from "expo-router";

export default function SignInHome() {
  return (
    <ContentContainer>
      <CustomAppBar />

      <Title>Welcome back</Title>
      <Subtitle>Sign in to your account</Subtitle>

      <Input placeholder="User Name" />
      <Input placeholder="Password" />

      <Container>
        <ButtonSecondary
          icon={{
            type: "AntDesign",
            name: "right",
          }}
          toggle={() => router.navigate("/(onboarding)/(SignIn)/SignInPin")}
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
