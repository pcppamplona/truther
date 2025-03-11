import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface UserRegistrationData {
  id?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string | Date;
  password?: string;
  address?: {
    cep?: string;
    street?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
  };
  pin?: string | number;
}

interface UserRegistrationContextProps {
  userData: UserRegistrationData;
  updateUserData: (newData: Partial<UserRegistrationData>) => void;
  saveToStorage: () => void;
}

export const UserRegistrationContext = createContext<UserRegistrationContextProps | undefined>(undefined);

export const UserRegistrationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserRegistrationData>({});

  const updateUserData = (newData: Partial<UserRegistrationData>) => {
    setUserData((prev) => ({ ...prev, ...newData }));
  };

  const saveToStorage = async () => {
    try {
      await AsyncStorage.setItem("user_registration", JSON.stringify(userData));
    } catch (error) {
      console.error("Error saving user data to storage:", error);
    }
  };

  return (
    <UserRegistrationContext.Provider value={{ userData, updateUserData, saveToStorage }}>
      {children}
    </UserRegistrationContext.Provider>
  );
};

export const useSignUpContext = () => {
  const context = useContext(UserRegistrationContext);
  if (!context) {
    throw new Error("useSignUpContext must be used within a UserRegistrationProvider");
  }
  return context;
};
