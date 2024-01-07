import styled from "styled-components/native";
import RoundButton from "../../components/RoundButton";

export const Container = styled.View`
  flex: 1;
`;

export const TopContainer = styled.View`
  flex: 1;
  padding: 20px;
  width: 100%;
  background-color: yellow;
  align-items: center;
  justify-content: center;
`;

export const BottomContainer = styled.View`
  padding: 20px;
  flex-direction: row;
  width: 100%;
  background-color: red;
  justify-content: space-between;
`;

export const PreviousButton = styled(RoundButton)``;

export const NextButton = styled(RoundButton)``;
