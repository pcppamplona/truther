import { useState, useEffect } from "react";
import { Text, Image, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyledScrollView,
  ContentContainer,
  FavoriteButton,
  Container,
  Title,
  Subtitle,
  ContainerList,
  TitleList,
  SubtitleList,
} from "./../../styles/DashboardStyles/ItemCrypto"; 

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
    return <ActivityIndicator size="large" color="#000" />;
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
