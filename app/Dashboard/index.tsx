import { useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { useFetchCoins } from "@/hooks/useFetchCoins";
import { AntDesign } from "@expo/vector-icons";
import { ActivityIndicator, FlatList, Image } from "react-native";
import { router } from "expo-router";
import { Video, ResizeMode } from "expo-av";
import {
  ContainerView,
  Title,
  ContentContainer,
  SearchBarContainer,
  SearchBar,
  ContentPage,
  ContainerTitle,
  TextStyled,
  TextLinkStyled,
  CoinItem,
  CoinSymbol,
  CoinName,
  Col,
  Container,
} from "./../../styles/DashboardStyles/index"
import ButtonSecondary from "@/components/ButtonSecondary";

export default function Dashboard() {
  const { userData } = useAuthContext();
  const { coins, loading, error } = useFetchCoins();
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrando as moedas com base no searchQuery
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ContainerView>
      <ContentContainer>
        <Title>Welcome, {userData?.firstName}</Title>
        <SearchBarContainer>
          <AntDesign name="search1" size={20} color="gray" />
          <SearchBar
            placeholder="Search"
            placeholderTextColor="gray"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </SearchBarContainer>
      </ContentContainer>

      <ContainerTitle>
        <TextStyled>Bookmarks</TextStyled>
        <TextLinkStyled>See all</TextLinkStyled>
      </ContainerTitle>

      <ContentPage>
        {loading ? (
          <ActivityIndicator size="large" color="white" />
        ) : error ? (
          <Video
            source={require("@/assets/videos/NoData.gif")}
            style={{ width: 200, height: 200 }}
            resizeMode={ResizeMode.CONTAIN}
            shouldPlay
            isLooping
          />
        ) : (
          <FlatList
            data={filteredCoins}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CoinItem
                onPress={() =>
                  router.navigate({
                    pathname: "/Dashboard/ItemCrypto",
                    params: { coin: JSON.stringify(item) }, // Serializando o objeto
                  })
                }
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 42, height: 42 }}
                />
                <Col>
                  <CoinSymbol>{item.symbol.toUpperCase()}</CoinSymbol>
                  <CoinName>{item.name}</CoinName>
                </Col>
                <CoinName>$ {item.current_price}</CoinName>
              </CoinItem>
            )}
          />
        )}
      </ContentPage>
      <Container>
        <ButtonSecondary
          icon={{
            type: "FontAwesome",
            name: "exchange",
          }}
          toggle={() => router.navigate("/Dashboard/Enchange")}
        />
      </Container>
    </ContainerView>
  );
}