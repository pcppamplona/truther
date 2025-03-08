import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

interface AppBarProps {
  title?: string;
  subtitle?: string;
  FuncButtom?: () => void;
}

export default function CustomAppBar({ title, subtitle, FuncButtom }: AppBarProps) {
  return (
    <Container>
      <BackButton onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} color="#333" />
      </BackButton>

      <TitleContainer>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </TitleContainer>

      <FuncButtonContainer>
        {FuncButtom && (
          <FuncButton onPress={FuncButtom}>
            <AntDesign name="setting" size={24} color="#333" />
          </FuncButton>
        )}
      </FuncButtonContainer>
    </Container>
  );
}

// Styled Components
const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-horizontal: 16px;
`;

const BackButton = styled.TouchableOpacity`
  padding: 15px;
  border-radius: 50px;
`;

const TitleContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #333;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #666;
  margin-top: 4px;
`;

const FuncButtonContainer = styled.View`
  width: 48px; /* Mantém o espaço reservado */
  align-items: flex-end;
`;

const FuncButton = styled.TouchableOpacity`
  padding: 15px;
  border-radius: 50px;
`;
