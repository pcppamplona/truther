import styled from "styled-components/native";

// Container principal
export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 20px;
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

// Input de texto
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

// Container do botão
export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
`;
