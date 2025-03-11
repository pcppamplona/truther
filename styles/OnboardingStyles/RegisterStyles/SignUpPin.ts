import styled from "styled-components/native";

// Container principal
export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

// Título
export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;

// Subtítulo
export const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #333;
`;

// Linha de inputs
export const InputRow = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-top: 30px;
`;

// Campo de entrada do PIN
export const PinInput = styled.TextInput`
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

// Link para resetar o PIN
export const TextLinkStyled = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-left: 8px;
  margin-top: 40px;
  cursor: pointer;
`;

// Contêiner de botões
export const ButtonsContainer = styled.View<{ marginTop?: number }>`
  width: 91.66%;
  margin-top: ${(props: any) => props.marginTop || 0}px;
`;

// Visão dos botões
export const ViewButtons = styled.View`
  width: 100%;
  padding: 20px 10px;
  background-color: white;
  align-items: center;
`;
