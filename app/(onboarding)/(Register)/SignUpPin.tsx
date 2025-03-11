import { useState, useRef } from "react";
import { TextInput } from "react-native";
import CustomAppBar from "@/components/CustomAppBar";
import ButtonPrimary from "@/components/ButtonPrimary";
import { useSignUpContext } from "@/contexts/SignUpContext";
import { router } from "expo-router";
import {
  ContentContainer,
  Title,
  Subtitle,
  InputRow,
  PinInput,
  TextLinkStyled,
  ButtonsContainer,
  ViewButtons
} from "././../../../styles/OnboardingStyles/RegisterStyles/SignUpPin"; 

export default function SignUpPin() {
  const { updateUserData, saveToStorage } = useSignUpContext();
  
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
    updateUserData({ pin });
    saveToStorage();
    router.navigate("/(onboarding)/(SignIn)/SignInHome");
  };
  

  const handleReset = () => {
    setPin(["", "", "", ""]);
    inputRefs.current[0]?.focus(); 
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
          <ButtonPrimary
            label="Set up Pin"
            toggle={() => handleSubmitPin(pin.join(""))}
          />
        </ButtonsContainer>
      </ViewButtons>
    </ContentContainer>
  );
}
