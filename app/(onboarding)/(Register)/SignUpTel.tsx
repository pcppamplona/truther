import { useState, useEffect } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import useCountries, { Country } from "@/hooks/useCountries";
import ButtonPrimary from "@/components/ButtonPrimary";
import { router } from "expo-router";
import { useSignUpContext } from "@/contexts/SignUpContext";
import { useForm, Controller } from "react-hook-form";
import {
  StyledScrollView,
  ContentContainer,
  Title,
  SelectContainer,
  CountryFlag,
  PhoneInputContainer,
  Container,
  TextStyled,
  TextLinkStyled,
  TextContent,
  TermsContainer,
  ErrorText,
} from "./../../../styles/OnboardingStyles/RegisterStyles/SignUpTel";
import { Input } from "@/components/InputPrimary";

export default function SignUpTel() {
  const { updateUserData } = useSignUpContext();

  const { countries, loading, error } = useCountries();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const onSubmit = (data: any) => {
    updateUserData({ phoneNumber: data.phoneNumber });
    router.navigate({
      pathname: "/(onboarding)/(Register)/SignUpDigit",
      params: { tel: data.phoneNumber },
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

            <Controller
              control={control}
              name="phoneNumber"
              rules={{ required: "Phone number is required" }}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder="0 0000-0000"
                  style={{ flex: 2 }}
                  keyboardType="number-pad"
                />
              )}
            />
          </PhoneInputContainer>
        )}
        {errors.phoneNumber &&
          typeof errors.phoneNumber.message === "string" && (
            <ErrorText>{errors.phoneNumber.message}</ErrorText>
          )}

        <ButtonPrimary label="Send Code" toggle={handleSubmit(onSubmit)} />

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
