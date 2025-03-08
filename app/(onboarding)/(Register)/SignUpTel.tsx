import { useState, useEffect } from "react";
import { Text, Image, TextInput, View, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styled from "styled-components/native";
import useCountries, { Country } from "@/hooks/useCountries";
import ButtonPrimary from "@/components/ButtonPrimary";
import { router } from "expo-router";
import { useSignUpContext } from "@/contexts/SignUpContext";

export default function SignUpTel() {
  const { updateUserData } = useSignUpContext();

  const { countries, loading, error } = useCountries();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  // Set the default country if no country is selected
  useEffect(() => {
    if (countries.length > 0 && !selectedCountry) {
      setSelectedCountry(countries[0]);
    }
  }, [countries, selectedCountry]);

  const handleCountryChange = (itemValue: string) => {
    const selected = countries.find(
      (country) => country.name.common === itemValue
    );
    setSelectedCountry(selected || null);
  };

  const handleNext = () => {
    updateUserData({ phoneNumber });
    router.navigate({
      pathname: "/(onboarding)/(Register)/SignUpDigit",
      params: {
        tel: phoneNumber,
      },
    });
  };

  return (
    <StyledScrollView>
      <ContentContainer>
        <Title>Getting Started</Title>
        <SelectContainer>
          <Picker
            selectedValue={selectedCountry?.name.common}
            onValueChange={handleCountryChange}
            style={{ flex: 1 }}
          >
            {countries.map((country) => (
              <Picker.Item
                key={country.name.common}
                label={country.name.common}
                value={country.name.common}
                style={{ flexDirection: "row", alignItems: "center" }}
              />
            ))}
          </Picker>
          {selectedCountry && (
            <>
              <CountryFlag>
                <Image
                  source={{ uri: selectedCountry.flags.png }}
                  style={{ width: 42, height: 42 }}
                />
              </CountryFlag>
            </>
          )}
        </SelectContainer>

        {selectedCountry && (
          <PhoneInputContainer>
            <Input
              value={`${selectedCountry.idd.root}${selectedCountry.idd.suffixes[0]}`}
              editable={false}
              placeholder="Country Dial Code"
              style={{ flex: 1, marginRight: 10 }}
            />

            <Input
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="0 0000-0000"
              style={{ flex: 2 }}
              keyboardType="number-pad"
            />
          </PhoneInputContainer>
        )}

        <ButtonPrimary label="Send Code" toggle={handleNext} />

        <TouchableOpacity onPress={() => router.navigate("/")}>
          <Container>
            <TextStyled>Already have an account?</TextStyled>
            <TextLinkStyled>Sign In</TextLinkStyled>
          </Container>
        </TouchableOpacity>

        <TermsContainer>
          <TextStyled>
            By creating an account you agree to our &nbsp;
            <TextContent>Terms and Conditions</TextContent>
          </TextStyled>
        </TermsContainer>
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

const Title = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  color: #12033a;
  margin-top: 90px;
`;

const SelectContainer = styled.View`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 12px;
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const CountryFlag = styled.View`
  width: 42px;
  height: 42px;
  border-radius: 100%;
  overflow: hidden;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 70px;
  padding: 12px;
  font-weight: 700;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #ccc;
`;

const PhoneInputContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Container = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 40px;
`;

const TextStyled = styled.Text`
  font-family: "DM Sans";
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
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

const TextContent = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #12033a;
  margin-left: 8px;
`;

const TermsContainer = styled.View`
  margin-top: 20px;
  width: 80%;
  align-items: center;
  justify-content: center;
`;
