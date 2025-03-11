import styled from "styled-components/native";

// ScrollView com estilo
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
  padding: 20px;
`;

// Título principal
export const Title = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  color: #12033a;
  margin-top: 90px;
`;

// Contêiner de seleção do país
export const SelectContainer = styled.View`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 12px;
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

// Exibição da bandeira do país
export const CountryFlag = styled.View`
  width: 42px;
  height: 42px;
  border-radius: 100%;
  overflow: hidden;
`;

// Campo de input
export const Input = styled.TextInput`
  width: 100%;
  height: 70px;
  padding: 12px;
  font-weight: 700;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #ccc;
`;

// Contêiner do input de telefone
export const PhoneInputContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

// Contêiner para o link de login
export const Container = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 40px;
`;

// Estilos para o texto principal
export const TextStyled = styled.Text`
  font-family: "DM Sans";
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #12033a;
  text-align: center;
`;

// Estilo para o link
export const TextLinkStyled = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #23ebc3;
  margin-left: 8px;
`;

// Estilo para o texto de conteúdo
export const TextContent = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #12033a;
  margin-left: 8px;
`;

// Contêiner dos termos e condições
export const TermsContainer = styled.View`
  margin-top: 20px;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

export const ErrorText = styled.Text`
  color: red;
  text-align: right;
  align-self: flex-end;
  margin-bottom: 20px;
`;