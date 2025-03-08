import CustomAppBar from "@/components/CustomAppBar";
import { router, useLocalSearchParams } from "expo-router";
import { useRef, useState } from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
export default function SignUpDigit() {
  const { tel } = useLocalSearchParams();

  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef<TextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    if (!/^\d?$/.test(text)) return; // Permite apenas números

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move o foco para o próximo campo
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Verifica se todos os campos foram preenchidos
    if (newCode.every((digit) => digit !== "")) {
      validateCode(newCode.join(""));
    }
  };

  const validateCode = (code: string) => {
    router.navigate("/(onboarding)/(Register)/SignUpPersonal")
  };

  const maskPhoneNumber = (phone: string | string[]) => {
    if (Array.isArray(phone)) {
      phone = phone[0];
    }
    if (!phone) return "";
    return phone.replace(/\d(?=\d{3})/g, "*");
  };
  
  return (
    <ContentContainer>
      <CustomAppBar />


      <Title>Enter 4-digit code</Title>
      <Subtitle>We{"´"}ve sent the code to {maskPhoneNumber(String(tel))}</Subtitle>

      <InputRow>
        {code.map((_, index) => (
          <CodeInput
            key={index}
            ref={(el: any) => (inputRefs.current[index] = el!)}
            keyboardType="numeric"
            maxLength={1}
            value={code[index]}
            onChangeText={(text: string) => handleChange(text, index)}
          />
        ))}
      </InputRow>

      <TextLinkStyled>Resend</TextLinkStyled>

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

const CodeInput = styled.TextInput`
  width: 56px;
  height: 56px;
  text-align: center;
  font-size: 16px;
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
  color: #23ebc3;
  margin-left: 8px;
  margin-top: 40px;
`;