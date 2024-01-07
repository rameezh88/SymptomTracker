import styled from "styled-components/native";
import { colors } from "../../constants/colors";
import { RoundButtonProps } from ".";

export const Container = styled.Pressable<RoundButtonProps>`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.disabled ? colors.disabled : colors.primary};
`;
