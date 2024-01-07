import { Text } from "react-native-paper";
import styled from "styled-components";

export const Title = styled(Text).attrs(() => {
  return {
    variant: "headlineMedium",
  };
})`
  text-align: center;
`;
