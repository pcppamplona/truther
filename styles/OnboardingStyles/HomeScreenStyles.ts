import styled from "styled-components/native";

// ScrollView estilizado
export const StyledScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  width: 100%;
  background-color: #dc143c;
`;

// Contêiner de conteúdo
export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
`;

// Título
export const Title = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  color: white;
  margin-top: 90px;
`;

// Imagem estilizada
export const StyledImage = styled.Image`
  margin-top: 30px;
  margin-bottom: 4px;
  transform: scale(0.9);
`;

// Contêiner dos botões
export const ButtonsContainer = styled.View<{ marginTop?: number }>`
  width: 91.66%;
  margin-top: ${(props: any) => props.marginTop || 0}px;
`;

// Botão Sign In estilizado
export const ButtomSign = styled.TouchableOpacity`
  width: 100%;
  height: 64px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

// Texto do botão Sign In
export const ButtonText = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: white;
`;

// View de Botões
export const ViewButtons = styled.View`
  width: 100%;
  padding: 20px 10px;
  background-color: #dc143c;
  align-items: center;
`;
