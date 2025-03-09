import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

interface Address {
  cep: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

interface UserRegistration {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
  birthDate: string;
  address: Address;
}

interface AuthContextData {
  signIn: (firstName: string, password: string) => Promise<void>;
  userData: UserRegistration | null;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserRegistration | null>(null);

  // Função para salvar as informações do usuário no AsyncStorage
  const saveUserData = async (user: UserRegistration) => {
    try {
      await AsyncStorage.setItem("user_registration", JSON.stringify(user));
      setUserData(user);  // Atualiza o estado global com as informações do usuário
    } catch (error) {
      console.error("Erro ao salvar dados do usuário", error);
    }
  };

  // Função de login
  const signIn = async (firstName: string, password: string): Promise<void> => {
    console.log("context", firstName, password);
    
    try {
      const userRegistrationJson = await AsyncStorage.getItem("user_registration");
      if (userRegistrationJson) {
        const userRegistration = JSON.parse(userRegistrationJson);

        if (
          userRegistration.firstName === firstName &&
          userRegistration.password === password
        ) {
          console.log("logado");

          saveUserData(userRegistration);
          
          router.navigate("/Dashboard");
          return;
        } else {
          console.log("deu ruim");
          throw new Error("Usuário ou senha inválidos");
        }
      } else {
        console.log("Nenhum usuário registrado");
        throw new Error("Usuário não encontrado");
      }
    } catch (error) {
      console.error("Erro ao acessar o AsyncStorage", error);
      throw new Error("Erro ao fazer login");
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
