import { useState, useRef } from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import CustomAppBar from "@/components/CustomAppBar";
import ButtonPrimary from "@/components/ButtonPrimary";
import { router } from "expo-router";

export default function SignUpPin() {
    const [pin, setPin] = useState(["", "", "", ""]);
    const inputRefs = useRef<TextInput[]>([]);
  
    const handleChange = (text: string, index: number) => {
      if (!/^\d?$/.test(text)) return; 
  
      const newPin = [...pin];
      newPin[index] = text;
      setPin(newPin);
  
      if (text && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
  
      if (newPin.every((digit) => digit !== "")) {
        handleSubmitPin(newPin.join(""));
      }
    };
  
    const handleSubmitPin = (pin: string) => {
      console.log("PIN criado:", pin);
    };
  
    const handleReset = () => {
      setPin(["", "", "", ""]);
      inputRefs.current[0]?.focus(); // Focar no primeiro campo após o reset
    };
  

  return (
    <ContentContainer>
      <CustomAppBar />

      <Title>Create your PIN</Title>
      <Subtitle>Create a four-digit passcode to secure your account</Subtitle>

      <InputRow>
        {pin.map((_, index) => (
          <PinInput
            key={index}
            ref={(el: any) => (inputRefs.current[index] = el!)}
            keyboardType="numeric"
            maxLength={1}
            value={pin[index] ? "*" : ""}
            onChangeText={(text: string) => handleChange(text, index)}
            secureTextEntry
          />
        ))}
      </InputRow>

      <TextLinkStyled onPress={handleReset}>Reset</TextLinkStyled>

      <ViewButtons>
        <ButtonsContainer marginTop={10}>
          <ButtonPrimary label="Set up Pin" />
          <ButtomSign
            onPress={() =>
              router.push("/(onboarding)/(SignIn)/SignInHome")
            }
          ></ButtomSign>
        </ButtonsContainer>
      </ViewButtons>
    </ContentContainer>
  );
}

// Styled Components
const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #333;
`;

const InputRow = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-top: 30px;
`;

const PinInput = styled.TextInput`
  width: 56px;
  height: 56px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  border-width: 2px;
  border-color: #ccc;
  border-radius: 16px;
  background-color: #fff;
`;

const TextLinkStyled = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-left: 8px;
  margin-top: 40px;
  cursor: pointer;
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

const ViewButtons = styled.View`
  width: 100%;
  padding: 20px 10px;
  background-color: white;
  align-items: center;
`;
