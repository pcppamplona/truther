import React from "react";
import styled from "styled-components/native";

interface InputProps {
    value: string;
    onChangeText?: (text: string) => void;
    placeholder: string;
    keyboardType?: "default" | "numeric" | "email-address" | "phone-pad" | "decimal-pad" | "url" | "visible-password" | "number-pad" | undefined;
    [key: string]: any;
  }
  

export const Input: React.FC<InputProps> = ({ value, onChangeText, placeholder, keyboardType = "default", ...rest }) => {
  return (
    <StyledInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      {...rest}
    />
  );
};

const StyledInput = styled.TextInput`
  width: 100%;
  height: 70px;
  padding: 12px;
  font-weight: 700;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #ccc;
`;
