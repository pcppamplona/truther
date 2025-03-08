import styled from "styled-components/native";

interface ButtonPrimaryProps {
  label: string;
  toggle?: () => void;
  disable?: boolean;
}

export default function ButtonPrimary({
  label,
  toggle,
  disable,
}: ButtonPrimaryProps) {
  return (
    <StyledButton disabled={disable} onPress={toggle}>
      <ButtonText>{label}</ButtonText>
    </StyledButton>
  );
}

// Styled Components
const StyledButton = styled.TouchableOpacity<{ disabled: boolean }>`
  width: 100%;
  height: 58px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${(props: any) => (props.disabled ? "#d0d1dd" : "#23EBC3")};
`;

const ButtonText = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: white;
`;
