import { useEffect, useState } from "react";
import axios from "axios";
import { ActivityIndicator, Text, View } from "react-native";
import styled from "styled-components/native";
import { useLocalSearchParams } from "expo-router";

export default function ItemCrypto() {
  const { id } = useLocalSearchParams();
  console.log("id", id);

  return <Container></Container>;
}

// Styled Components
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
