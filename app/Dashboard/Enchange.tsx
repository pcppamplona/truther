import { ActivityIndicator } from "react-native";
import CustomAppBar from "@/components/CustomAppBar";
import { Picker } from "@react-native-picker/picker";
import { useCryptoExchange } from "@/hooks/useCryptoExchange";
import {
  StyledScrollView,
  ContentContainer,
  Label,
  PickerContainer,
  PickerStyled,
  ImageContainer,
  CoinImage,
  Input,
  ResultText,
  PriceText,
} from "../../styles/DashboardStyles/Exchange";

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