import styled from "styled-components/native";

export const ContainerView = styled.View`
  flex: 1;
  width: 100%;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  color: white;
  margin-top: 20px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: #dc143c;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  position: relative;
`;

export const SearchBarContainer = styled.View`
  position: absolute;
  bottom: -20px;
  width: 80%;
  height: 50px;
  background-color: #f1f3fa;
  border-radius: 25px;
  padding-left: 15px;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
`;

export const SearchBar = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding-left: 10px;
  color: black;
`;

export const ContentPage = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

export const ContainerTitle = styled.View`
  padding: 40px 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const TextStyled = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #12033a;
  text-align: center;
`;

export const TextLinkStyled = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #23ebc3;
  margin-left: 8px;
`;

export const CoinItem = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

export const CoinSymbol = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

export const CoinName = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 16px;
  margin-top: 10px;
`;

export const Col = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: 20px;
`;

export const Container = styled.View`
  position: absolute;
  bottom: 20px;
  right: 20px;
  elevation: 5;
`;
