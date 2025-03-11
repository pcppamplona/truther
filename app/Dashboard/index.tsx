import { useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { useFetchCoins } from "@/hooks/useFetchCoins";
import { AntDesign } from "@expo/vector-icons";
import { ActivityIndicator, FlatList, Image } from "react-native";
import styled from "styled-components/native";
import ButtonSecondary from "@/components/ButtonSecondary";
import { router } from "expo-router";
import { Video, ResizeMode } from "expo-av";

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
                  params: {
                    id: item.id,
                    coin: JSON.stringify(item), // Serializando o objeto coin
                  },
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
              <CoinName>{item.current_price}</CoinName>
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

const ContainerView = styled.View`
  flex: 1;
  width: 100%;
  background-color: #fff;
`;

const Title = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  color: white;
  margin-top: 20px;
`;

const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: #dc143c;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  position: relative;
`;

const SearchBarContainer = styled.View`
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

const SearchBar = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding-left: 10px;
  color: black;
`;

const ContentPage = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

const ContainerTitle = styled.View`
  padding: 40px 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const TextStyled = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #12033a;
  text-align: center;
`;

const TextLinkStyled = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #23ebc3;
  margin-left: 8px;
`;

const CoinItem = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const CoinSymbol = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

const CoinName = styled.Text`
  font-size: 16px;
  color: #666;
`;

const ErrorText = styled.Text`
  color: red;
  font-size: 16px;
  margin-top: 10px;
`;

const Col = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: 20px;
`;

const Container = styled.View`
  position: absolute;
  bottom: 20px;
  right: 20px;
  elevation: 5;
`;

