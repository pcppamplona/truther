import styled from "styled-components/native";

// ScrollView estilizado
export const StyledScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  width: 100%;
  background-color: #fff;
`;

// Contêiner principal do conteúdo
export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  height: 275px;
  background-color: #dc143c;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  padding-bottom: 20px;
  position: relative;
`;

// Botão de Favorito
export const FavoriteButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  margin-top: 30px;
`;

// Contêiner para as informações da criptomoeda
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

// Título principal
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

// Subtítulo de informações
export const Subtitle = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #12033a;
  text-align: left;
  align-self: flex-start;
  margin-bottom: 12px;
`;

// Contêiner para os itens de lista
export const ContainerList = styled.View<{ isEven: boolean }>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: ${({ isEven }: any) => (isEven ? "#F9FAFF" : "#FFF")};
`;

// Título da lista
export const TitleList = styled.Text`
  font-family: "DM Sans";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #12033a;
`;

// Subtítulo da lista
export const SubtitleList = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #12033a;
`;
