import { useState, useEffect } from "react";
import { Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ItemCrypto() {
  const { coin }: any = useLocalSearchParams();
  const parsedCoin = coin ? JSON.parse(coin) : null;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (parsedCoin) {
      checkIfFavorite();
    }
  }, [parsedCoin]);

  const checkIfFavorite = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("user_registration");
      if (!userDataString) return;

      const userData = JSON.parse(userDataString);
      const favorites = userData.favorites || [];
      setIsFavorite(favorites.some((fav: any) => fav.id === parsedCoin.id));
    } catch (error) {
      console.error("Error checking favorites:", error);
    }
  };

  const toggleFavorite = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("user_registration");
      if (!userDataString) return;

      let userData = JSON.parse(userDataString);
      if (!userData.favorites) {
        userData.favorites = [];
      }

      if (isFavorite) {
        userData.favorites = userData.favorites.filter(
          (fav: any) => fav.id !== parsedCoin.id
        );
      } else {
        userData.favorites.push(parsedCoin);
      }

      await AsyncStorage.setItem("user_registration", JSON.stringify(userData));
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  if (!coin) {
    return <ActivityIndicator size="large" color="#000" />
  }

  return (
    <StyledScrollView>
      <ContentContainer>
        <FavoriteButton onPress={toggleFavorite}>
          <AntDesign
            name={isFavorite ? "heart" : "hearto"}
            size={24}
            color={isFavorite ? "yellow" : "white"}
          />
        </FavoriteButton>
        <Image
          source={{ uri: parsedCoin.image }}
          style={{ width: 84, height: 84, marginBottom: 10 }}
        />
        <Title>{parsedCoin.name}</Title>
        <Title>{`$ ${parsedCoin.current_price}`}</Title>
      </ContentContainer>
      <Container>
        <Subtitle>{parsedCoin.name} Historical Price</Subtitle>
        {parsedCoin && (
          <>
            {[
              { title: "Market Cap", value: `$ ${parsedCoin.market_cap}` },
              {
                title: "24h Range",
                value: `$ ${parsedCoin.market_cap_change_24h}`,
              },
              { title: "7d Range", value: `$ ${parsedCoin.sparkline_in_7d}` },
              { title: "All-Time High", value: `$ ${parsedCoin.ath}` },
              { title: "All-Time Low", value: `$ ${parsedCoin.atl}` },
            ].map((item, index) => (
              <ContainerList key={index} isEven={index % 2 === 0}>
                <TitleList>{item.title}</TitleList>
                <SubtitleList>{item.value}</SubtitleList>
              </ContainerList>
            ))}
          </>
        )}
      </Container>
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
  justify-content: flex-end;
  height: 275px;
  background-color: #dc143c;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  padding-bottom: 20px;
  position: relative;
`;

const FavoriteButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  margin-top: 30px;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const Subtitle = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #12033a;
  text-align: left;
  align-self: flex-start;
  margin-bottom: 12px;
`;

const ContainerList = styled.View<{ isEven: boolean }>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: ${({ isEven }: any) => (isEven ? "#F9FAFF" : "#FFF")};
`;

const TitleList = styled.Text`
  font-family: "DM Sans";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #12033a;
`;

const SubtitleList = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #12033a;
`;
