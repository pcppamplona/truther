import React from "react";
import { useRouter } from "expo-router";
import ButtonPrimary from "@/components/ButtonPrimary";
import {
  StyledScrollView,
  ContentContainer,
  Container,
  StyledImage,
  Title,
  Subtitle,
  DotsContainer,
  Dot,
  ButtonContainer,
  SkipButton,
  NextButton,
} from "./../../../styles/OnboardingStyles/WelcomeStyles/WelcomeStyles";

export default function WelcomeScreen3() {
  const router = useRouter();

  return (
    <StyledScrollView>
    <ContentContainer>
      <StyledImage source={require("@/assets/images/Darkiconslarge.png")} />
    </ContentContainer>

    <Container>
      <Title>Stay Secure</Title>
      <Subtitle>Protect your data with our advanced security measures.</Subtitle>

      <DotsContainer>
        <Dot />
        <Dot />
        <Dot active />
      </DotsContainer>

      <ButtonContainer>
         <ButtonPrimary label="Create Account" toggle={() => router.navigate("/(onboarding)/(Register)/SignUpTel")}/>
      </ButtonContainer>
    </Container>
  </StyledScrollView>
  );
}