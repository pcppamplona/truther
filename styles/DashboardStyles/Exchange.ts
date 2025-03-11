import { Picker } from "@react-native-picker/picker";
import styled from "styled-components/native";

export const StyledScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  width: 100%;
  background-color: #fff;
`;

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  text-align: left;
  align-self: flex-start;
`;

export const PickerContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 12px;
  margin-top: 10px;
  background-color: #f9f9f9;
  justify-content: space-between;
`;

export const PickerStyled = styled(Picker)`
  flex: 1;
  height: 60px;
  font-size: 18px;
`;

export const ImageContainer = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const CoinImage = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 15px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  margin-top: 10px;
`;

export const ResultText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  color: #12033a;
`;

export const PriceText = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #23ebc3;
  margin-top: 8px;
  text-align: left;
  align-self: flex-start;
  margin-bottom: 25px;
`;
