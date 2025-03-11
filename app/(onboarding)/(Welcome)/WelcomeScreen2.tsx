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

export default function WelcomeScreen2() {
  const router = useRouter();

  return (
    <StyledScrollView>
      <ContentContainer>
        <StyledImage source={require("@/assets/images/Darkiconslarge.png")} />
      </ContentContainer>

      <Container>
        <Title>Manage Your Portfolio</Title>
        <Subtitle>Keep track of your investments effortlessly.</Subtitle>

        <DotsContainer>
          <Dot />
          <Dot active />
          <Dot />
        </DotsContainer>

        <ButtonContainer>
          <SkipButton
            onPress={() => router.push("/(onboarding)/(Welcome)/WelcomeScreen")}
          >
            Skip
          </SkipButton>

          <NextButton
            title="Next"
            onPress={() =>
              router.push("/(onboarding)/(Welcome)/WelcomeScreen3")
            }
          >
            Next
          </NextButton>
        </ButtonContainer>
      </Container>
    </StyledScrollView>
  );
}