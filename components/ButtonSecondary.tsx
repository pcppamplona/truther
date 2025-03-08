import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import {
  FontAwesome,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import styled from "styled-components/native";


// Demais tipos para os diferentes conjuntos de ícones da lib do react-native-icons
type IconSet =
  | "MaterialIcons"
  | "FontAwesome"
  | "Ionicons"
  | "AntDesign"
  | "MaterialCommunityIcons"
  | "Octicons";

// Define um tipo genérico para os nomes de ícones
type IconName<T> = T extends "MaterialIcons"
  ? keyof typeof MaterialIcons.glyphMap
  : T extends "FontAwesome"
  ? keyof typeof FontAwesome.glyphMap
  : T extends "Ionicons"
  ? keyof typeof Ionicons.glyphMap
  : T extends "AntDesign"
  ? keyof typeof AntDesign.glyphMap
  : T extends "MaterialCommunityIcons"
  ? keyof typeof MaterialCommunityIcons.glyphMap
  : T extends "Octicons"
  ? keyof typeof Octicons.glyphMap
  : never;

interface ActionsUtilsProps<T extends IconSet> {
  label?: string;
  toggle?: () => void;
  icon: { type: T; name: IconName<T> };
}

export default function ButtonSecondary<T extends IconSet>({
  label,
  toggle,
  icon,
}: ActionsUtilsProps<T>) {
  const renderIcon = () => {
    switch (icon.type) {
      case "MaterialIcons":
        return (
          <MaterialIcons
            name={icon.name as keyof typeof MaterialIcons.glyphMap}
            size={20}
            color={"#FFFFFF"}
          />
        );
      case "FontAwesome":
        return (
          <FontAwesome
            name={icon.name as keyof typeof FontAwesome.glyphMap}
            size={20}
            color={"#FFFFFF"}
          />
        );
      case "Ionicons":
        return (
          <Ionicons
            name={icon.name as keyof typeof Ionicons.glyphMap}
            size={20}
            color={"#FFFFFF"}
          />
        );
      case "AntDesign":
        return (
          <AntDesign
            name={icon.name as keyof typeof AntDesign.glyphMap}
            size={20}
            color={"#FFFFFF"}
          />
        );
      case "MaterialCommunityIcons":
        return (
          <MaterialCommunityIcons
            name={icon.name as keyof typeof MaterialCommunityIcons.glyphMap}
            size={20}
            color={"#FFFFFF"}
          />
        );
      case "Octicons":
        return (
          <Octicons
            name={icon.name as keyof typeof Octicons.glyphMap}
            size={20}
            color={"#FFFFFF"}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Button onPress={toggle} label={label}>
        {renderIcon()}
      </Button>
      <Label>{label}</Label>
    </Container>
  );
}

// Styled Components
const Container = styled.View`
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  background-color: #23ebc3;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 58px; 
  height: 58px;
`;

const Label = styled.Text`
  max-width: 80px;
  margin-left: 8px;
  font-weight: 500;
  font-size: 18px; 
  line-height: 20px;
  color: #666666;
  text-align: center;
  word-wrap: break-word;
`;
