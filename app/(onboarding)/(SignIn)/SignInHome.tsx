import React, { useState, useEffect } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonSecondary from "@/components/ButtonSecondary";
import {
  ContentContainer,
  Title,
  Subtitle,
  Container,
} from "./../../../styles/OnboardingStyles/SignInStyles/SignInHomeStyles";
import { Input } from "@/components/InputPrimary";
import { useForm, Controller } from "react-hook-form";
import { ErrorText } from "@/styles/OnboardingStyles/RegisterStyles/SignUpTel";

export default function SignInHome() {
  const { signIn } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = async (data: any) => {
    setLoading(true);
    try {
      await signIn(data.firstName, data.password);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkStorage = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const items = await AsyncStorage.multiGet(keys);

        console.log("AsyncStorage:");
        items.forEach(([key, value]) => {
          console.log(`${key}: ${value}`);
        });
      } catch (error) {
        console.error("Erro ao acessar o AsyncStorage:", error);
      }
    };

    checkStorage();
  }, []);

  return (
    <ContentContainer>
      <Title>Welcome back</Title>
      <Subtitle>Sign in to your account</Subtitle>

      {/* User Name Input */}
      <Controller
        control={control}
        name="firstName"
        rules={{ required: "User Name is required" }}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            placeholder="User Name"
          />
        )}
      />
      {errors.firstName && typeof errors.firstName.message === "string" && (
        <ErrorText>{errors.firstName.message}</ErrorText>
      )}

      {/* Password Input */}
      <Controller
        control={control}
        name="password"
        rules={{ required: "Password is required" }}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            placeholder="Password"
            secureTextEntry
          />
        )}
      />
      {errors.password && typeof errors.password.message === "string" && (
        <ErrorText>{errors.password.message}</ErrorText>
      )}

      <Container>
        <ButtonSecondary
          icon={{
            type: "AntDesign",
            name: "right",
          }}
          toggle={handleSubmit(handleSignIn)}
        />
      </Container>
    </ContentContainer>
  );
}
