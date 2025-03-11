import styled from "styled-components/native";

// Contêiner principal do componente
export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

// Título da tela
export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;

// Subtítulo (caso necessário)
export const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #333;
`;

// Linha de inputs para o PIN
export const InputRow = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-top: 30px;
`;

// Campo de input para cada dígito do PIN
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

// Estilo do link de reset
export const TextLinkStyled = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-left: 8px;
  margin-top: 40px;
  cursor: pointer;
`;

// Contêiner para os botões
export const ButtonsContainer = styled.View<{ marginTop?: number }>`
  width: 91.66%;
  margin-top: ${(props: any) => props.marginTop || 0}px;
`;

// Estilo do botão de "sign"
export const ButtomSign = styled.TouchableOpacity`
  width: 100%;
  height: 64px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

// Contêiner de botões
export const ViewButtons = styled.View`
  width: 100%;
  padding: 20px 10px;
  background-color: white;
  align-items: center;
`;
