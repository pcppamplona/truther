import CustomAppBar from "@/components/CustomAppBar";
import React, { useState } from "react";
import styled from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import ButtonSecondary from "@/components/ButtonSecondary";
import { router } from "expo-router";

export default function SignUpPersonal() {
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);

  const handleStartDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || new Date();
    setStartDate(currentDate);
    setShowStartDatePicker(false);
  };

  // Format the date to a readable string (e.g., "March 8, 2025")
  const formattedDate = startDate
    ? startDate.toLocaleDateString()
    : "Date of birth ( MM / DD / YYYY )";

  // Check if the formatted date is the placeholder text
  const isPlaceholder = formattedDate === "Date of birth ( MM / DD / YYYY )";

  return (
    <ContentContainer>
      <CustomAppBar />

      <Title>Personal Information</Title>
      <Subtitle>
        We ask for your personal information to verify your identity
      </Subtitle>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />

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

      <Input placeholder="Password" />

      <Container>
        <ButtonSecondary
          icon={{
            type: "AntDesign",
            name: "right",
          }}
          toggle={() => router.navigate("/(onboarding)/(Register)/SignUpHome")}
        />
      </Container>
    </ContentContainer>
  );
}

// Styled Components
const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #333;
`;

const Subtitle = styled.Text`
  width: 89%;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 25px;
  color: #333;
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

const DataTimeInput = styled.TouchableOpacity`
  width: 100%;
  height: 70px;
  padding: 12px;
  font-weight: 700;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #ccc;
  justify-content: center;
  align-items: flex-start;
`;


const DateText = styled.Text<{ isPlaceholder: boolean }>`
  font-weight: bold;
  font-size: 16px;
  color: ${({ isPlaceholder }: any) => (isPlaceholder ? "#ccc" : "#333")};
  text-align: left;
  width: 100%;
`;

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
`;

