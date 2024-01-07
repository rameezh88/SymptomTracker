import { TextInput } from "react-native-paper";
import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const NameEntryField = styled(TextInput).attrs(() => ({
  mode: "outlined",
  autoCorrect: false,
}))`
  width: 100%;
  margin-top: 20px;
  height: 50px;
  background-color: white;
`;
