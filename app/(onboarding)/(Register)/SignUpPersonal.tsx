import CustomAppBar from "@/components/CustomAppBar";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import ButtonSecondary from "@/components/ButtonSecondary";
import { router } from "expo-router";
import { useSignUpContext } from "@/contexts/SignUpContext";
import {
  ContentContainer,
  Title,
  Subtitle,
  Input,
  Container,
  DataTimeInput,
  DateText,
} from "././../../../styles/OnboardingStyles/RegisterStyles/SignUpPersonal";

export default function SignUpPersonal() {
  const { updateUserData } = useSignUpContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);

  const handleStartDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || new Date();
    setStartDate(currentDate);
    setShowStartDatePicker(false);
  };

  const formattedDate = startDate
    ? startDate.toLocaleDateString()
    : "Date of birth ( MM / DD / YYYY )";

  const isPlaceholder = formattedDate === "Date of birth ( MM / DD / YYYY )";

  const handleNext = () => {
    updateUserData({ firstName, lastName, password, birthDate: startDate });
    router.navigate("/(onboarding)/(Register)/SignUpHome");
  };

  return (
    <ContentContainer>
      <CustomAppBar />

      <Title>Personal Information</Title>
      <Subtitle>
        We ask for your personal information to verify your identity
      </Subtitle>
      <Input
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <Input
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />

      {showStartDatePicker && (
        <DateTimePicker
          value={startDate || new Date()}
          mode="date"
          display="default"
          onChange={handleStartDateChange}
        />
      )}

      <DataTimeInput onPress={() => setShowStartDatePicker(true)}>
        <DateText isPlaceholder={isPlaceholder}>{formattedDate}</DateText>
      </DataTimeInput>

      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />

      <Container>
        <ButtonSecondary
          icon={{
            type: "AntDesign",
            name: "right",
          }}
          toggle={handleNext}
        />
      </Container>
    </ContentContainer>
  );
}
