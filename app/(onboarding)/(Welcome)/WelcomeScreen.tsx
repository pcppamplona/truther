import React from "react";
import { useRouter } from "expo-router";
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

export default function WelcomeScreen1() {
  const router = useRouter();

  return (
    <StyledScrollView>
      <ContentContainer>
        <StyledImage source={require("@/assets/images/Toggles.png")} />
      </ContentContainer>

      <Container>
        <Title>Set Price Alerts</Title>
        <Subtitle>Get notified when the market hits your target.</Subtitle>

        <DotsContainer>
          <Dot active />
          <Dot />
          <Dot />
        </DotsContainer>

        <ButtonContainer>
          <SkipButton onPress={() => router.back()}>Skip</SkipButton>
          <NextButton onPress={() => router.push('/(onboarding)/(Welcome)/WelcomeScreen2')}>Next</NextButton>
        </ButtonContainer>
      </Container>
    </StyledScrollView>
  );
}
