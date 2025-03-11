import { ActivityIndicator, TextInput, View, Image } from "react-native";
import styled from "styled-components/native";
import CustomAppBar from "@/components/CustomAppBar";
import { Picker } from "@react-native-picker/picker";
import { useCryptoExchange } from "@/hooks/useCryptoExchange";
import { MaterialIcons } from "@expo/vector-icons";

export default function Exchange() {
  const {
    coins,
    fromCoin,
    toCoin,
    amount,
    convertedValue,
    loading,
    setFromCoin,
    setToCoin,
    setAmount,
  } = useCryptoExchange();

  return (
    <StyledScrollView>
      <ContentContainer>
        <CustomAppBar title="Exchange" />

        <PickerContainer>
          <ImageContainer>
            {fromCoin && coins?.length > 0 && (
              <CoinImage
                source={{ uri: coins.find((c) => c.id === fromCoin)?.image }}
              />
            )}
          </ImageContainer>
          <PickerStyled selectedValue={fromCoin} onValueChange={setFromCoin}>
            {coins.map((coin) => (
              <Picker.Item key={coin.id} label={coin.name} value={coin.id} />
            ))}
          </PickerStyled>
        </PickerContainer>
        {fromCoin && (
          <PriceText>
            {coins.find((coin) => coin.id === fromCoin)?.current_price
              ? `$ ${
                  coins.find((coin) => coin.id === fromCoin)?.current_price
                } USD`
              : "Preço não disponível"}
          </PriceText>
        )}

        <PickerContainer>
          <ImageContainer>
            {toCoin && (
              <CoinImage
                source={{ uri: coins.find((c) => c.id === toCoin)?.image }}
              />
            )}
          </ImageContainer>
          <PickerStyled selectedValue={toCoin} onValueChange={setToCoin}>
            {coins.map((coin) => (
              <Picker.Item key={coin.id} label={coin.name} value={coin.id} />
            ))}
          </PickerStyled>
        </PickerContainer>
        {toCoin && (
          <PriceText>
            {coins.find((coin) => coin.id === toCoin)?.current_price
              ? `$ ${
                  coins.find((coin) => coin.id === toCoin)?.current_price
                } USD`
              : "Preço não disponível"}
          </PriceText>
        )}

        <Label>Quantidade</Label>
        <Input
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          placeholder="Digite o valor"
        />

        {loading ? (
          <ActivityIndicator size="large" color="#DC143C" />
        ) : (
          <ResultText>
            {amount} {fromCoin.toUpperCase()} ≈ {convertedValue}{" "}
            {toCoin.toUpperCase()}
          </ResultText>
        )}
      </ContentContainer>
    </StyledScrollView>
  );
}

// Styled Components

const StyledScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  width: 100%;
  background-color: #fff;
`;

const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  text-align: left;
  align-self: flex-start;
`;

const PickerContainer = styled.View`
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

const PickerStyled = styled(Picker)`
  flex: 1;
  height: 60px;
  font-size: 18px;
`;

const ImageContainer = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const CoinImage = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 15px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  margin-top: 10px;
`;

const ResultText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  color: #12033a;
`;

const PriceText = styled.Text`
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
