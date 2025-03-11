import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native";
import { useRouter } from "expo-router";

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

// Styled Components
const StyledScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  width: 100%;
  background-color: #fff;
`;

const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 360px;
  background-color: #dc143c;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 20px;
`;

const StyledImage = styled.Image`
  margin-top: 30px;
  margin-bottom: 4px;
  transform: scale(0.9);
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

const DotsContainer = styled.View`
  flex-direction: row;
`;

const Dot = styled.View<{ active?: boolean }>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50px;
  background-color: ${(props: any) => (props.active ? "#dc143c" : "#ccc")};
`;

const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SkipButton = styled.Text`
  color: #dc143c;
  font-weight: 700;
  font-size: 14px;
`;

const NextButton = styled.Text`
  font-weight: 700;
  font-size: 16px;
`;
