import styled from "styled-components/native";
import RoundButton from "../../components/RoundButton";
import { ProgressBar } from "react-native-paper";
import { colors } from "../../constants/colors";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 20px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Progress = styled(ProgressBar).attrs(() => ({
  theme: {
    colors: {
      primary: colors.primary,
    },
  },
}))`
  height: 8px;
  width: ${screenWidth - 90}px;
  border-radius: 4px;
  background-color: ${colors.secondary};
`;

export const TopContainer = styled.View`
  flex: 1;
  padding: 20px;
  width: 100%;
`;

export const BottomContainer = styled.View`
  padding: 20px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const DummyView = styled.View`
  height: 60px;
  width: 60px;
`;

export const CloseButton = styled.Pressable``;

export const PreviousButton = styled(RoundButton)``;

export const NextButton = styled(RoundButton)``;
