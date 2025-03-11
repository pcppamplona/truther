import { useState, useEffect } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import useCountries, { Country } from "@/hooks/useCountries";
import ButtonPrimary from "@/components/ButtonPrimary";
import { router } from "expo-router";
import { useSignUpContext } from "@/contexts/SignUpContext";
import {
  StyledScrollView,
  ContentContainer,
  Title,
  SelectContainer,
  CountryFlag,
  Input,
  PhoneInputContainer,
  Container,
  TextStyled,
  TextLinkStyled,
  TextContent,
  TermsContainer,
} from "./../../../styles/OnboardingStyles/RegisterStyles/SignUpTel";

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
