import React from "react";
import { router } from "expo-router";
import ButtonPrimary from "@/components/ButtonPrimary";
import {
  StyledScrollView,
  ContentContainer,
  Title,
  StyledImage,
  ButtonsContainer,
  ButtomSign,
  ButtonText,
  ViewButtons
} from "./../../styles/OnboardingStyles/HomeScreenStyles";

export default function Login({}) {
  return (
    <>
      <StyledScrollView>
        <ContentContainer>
          <Title>Track Crypto Prices</Title>
          <StyledImage
            source={require("@/assets/images/start-investing.png")}
          />
        </ContentContainer>
      </StyledScrollView>

      <ViewButtons>
        <ButtonsContainer marginTop={10}>
          <ButtonPrimary label="Get Started" toggle={() => router.navigate("/(onboarding)/(Welcome)/WelcomeScreen")} />
          <ButtomSign onPress={() => router.navigate("/(onboarding)/(SignIn)/SignInHome")}>
            <ButtonText>Sign In</ButtonText>
          </ButtomSign>
        </ButtonsContainer>
      </ViewButtons>
    </>
  );
}
