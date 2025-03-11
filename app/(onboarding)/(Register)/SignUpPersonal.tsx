import CustomAppBar from "@/components/CustomAppBar";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import ButtonSecondary from "@/components/ButtonSecondary";
import { router } from "expo-router";
import { useSignUpContext } from "@/contexts/SignUpContext";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/InputPrimary";
import {
  ContentContainer,
  Title,
  Subtitle,
  Container,
  DataTimeInput,
  DateText,
} from "././../../../styles/OnboardingStyles/RegisterStyles/SignUpPersonal";
import { ErrorText } from "@/styles/OnboardingStyles/RegisterStyles/SignUpTel";

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

  const onSubmit = (data: any) => {
    updateUserData({ firstName, lastName, password, birthDate: startDate });
    router.navigate("/(onboarding)/(Register)/SignUpHome");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <ContentContainer>
      <CustomAppBar />

      <Title>Personal Information</Title>
      <Subtitle>
        We ask for your personal information to verify your identity
      </Subtitle>
    
      <Controller
        control={control}
        name="firstName"
        rules={{ required: "First Name is required" }}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            placeholder="First Name"
          />
        )}
      />
      {errors.firstName && typeof errors.firstName.message === "string" && (
        <ErrorText>{errors.firstName.message}</ErrorText>
      )}

    
      <Controller
        control={control}
        name="lastName"
        rules={{ required: "Last Name is required" }}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            placeholder="Last Name"
          />
        )}
      />
      {errors.lastName && typeof errors.lastName.message === "string" && (
        <ErrorText>{errors.lastName.message}</ErrorText>
      )}

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

      <Controller
        control={control}
        name="Password"
        rules={{ required: "Password is required" }}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            placeholder="Password"
          />
        )}
      />
      {errors.Password && typeof errors.Password.message === "string" && (
        <ErrorText>{errors.Password.message}</ErrorText>
      )}

      <Container>
        <ButtonSecondary
          icon={{
            type: "AntDesign",
            name: "right",
          }}
          toggle={handleSubmit(onSubmit)}
        />
      </Container>
    </ContentContainer>
  );
}
