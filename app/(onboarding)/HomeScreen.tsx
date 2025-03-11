import React from "react";
import styled from "styled-components/native";
import ButtonPrimary from "@/components/ButtonPrimary";
import { router } from "expo-router";

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
          <ButtonPrimary label="Get Started" toggle={() => router.navigate("/(onboarding)/(Welcome)/WelcomeScreen")}/>
          <ButtomSign onPress={() => router.navigate("/(onboarding)/(SignIn)/SignInHome")}>

            <ButtonText>Sign In</ButtonText>
          </ButtomSign>
        </ButtonsContainer>
      </ViewButtons>
    </>
  );
}

// Styled Components
const StyledScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  width: 100%;
  background-color: #dc143c;
`;

const Title = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  color: white;
  margin-top: 90px;
`;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 60%;
`;

const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
`;

const StyledImage = styled.Image`
  margin-top: 30px;
  margin-bottom: 4px;
  transform: scale(0.9);
`;

const ButtonsContainer = styled.View<{ marginTop?: number }>`
  width: 91.66%;
  margin-top: ${(props: any) => props.marginTop || 0}px;
`;

const ButtomSign = styled.TouchableOpacity`
  width: 100%;
  height: 64px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const ButtonText = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: white;
`;


const ViewButtons = styled.View`
  width: 100%;
  padding: 20px 10px;
  background-color: #dc143c;
  align-items: center;
`;
