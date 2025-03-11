import styled from "styled-components/native";

// ScrollView com estilo
export const StyledScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  width: 100%;
  background-color: #fff;
`;

// Contêiner para o conteúdo da imagem
export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 360px;
  background-color: #dc143c;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

// Contêiner para os textos e botões
export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 20px;
`;

// Estilo para a imagem
export const StyledImage = styled.Image`
  margin-top: 30px;
  margin-bottom: 4px;
  transform: scale(0.9);
`;

// Título
export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #333;
`;

// Subtítulo
export const Subtitle = styled.Text`
  width: 89%;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 25px;
  color: #333;
`;

// Contêiner dos pontos
export const DotsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

// Estilo para cada ponto
export const Dot = styled.View<{ active?: boolean }>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50px;
  background-color: ${(props: any) => (props.active ? "#dc143c" : "#ccc")};
`;

// Contêiner dos botões
export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// Estilo para o botão Skip
export const SkipButton = styled.Text`
  font-weight: 400;
  font-size: 16px;
`;

// Estilo para o botão Next
export const NextButton = styled.Text`
  font-weight: 700;
  font-size: 16px;
`;
