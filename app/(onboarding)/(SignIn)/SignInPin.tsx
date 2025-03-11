import { useState, useRef } from "react";
import { TextInput } from "react-native";
import { router } from "expo-router";
import CustomAppBar from "@/components/CustomAppBar";
import ButtonPrimary from "@/components/ButtonPrimary";
import {
  ContentContainer,
  Title,
  InputRow,
  PinInput,
  TextLinkStyled,
  ButtonsContainer,
  ButtomSign,
  ViewButtons,
} from "./../../../styles/OnboardingStyles/SignInStyles/SignInPinStyles";

export default function SignInPin() {
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
    inputRefs.current[0]?.focus();
  };

  return (
    <ContentContainer>
      <CustomAppBar />

      <Title>Enter your PIN</Title>

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
          <ButtonPrimary label="Continue" />
          <ButtomSign
            onPress={() => router.push("/Dashboard/index")}
          />
        </ButtonsContainer>
      </ViewButtons>
    </ContentContainer>
  );
}
