import styled from "styled-components/native";
import { colors } from "../../../constants/colors";
import { StyleSheet } from "react-native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const DescriptionEntryField = styled.TextInput.attrs<{
  focused?: boolean;
}>(() => ({
  multiline: true,
  autoCorrect: false,
}))`
  flex: 1;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  margin-top: 20px;
  height: 50px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.focused ? colors.secondaryDark : colors.secondary)};
`;

export const styles = StyleSheet.create({
  animationContainer: {
    width: "100%",
    flex: 1,
  },
});
