import styled from "styled-components/native";
import SeverityIndicator from "../SeverityIndicator";
import { colors } from "../../constants/colors";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

export const Severity = styled(SeverityIndicator)`
  margin-bottom: 5px;
`;

export const SeverityTitle = styled.Text`
  font-size: 12px;
  text-align: center;
  margin-horizontal: 5px;
`;

export const SeverityOptionButton = styled.Pressable<{ selected?: boolean }>`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-height: 80px;
  height: 79px;
  width: 60px;
  background-color: ${colors.lightPink};
  padding-vertical: 8px;
  border-radius: 10px;
  border-width: 1.5px;
  border-color: ${(props) => (props.selected ? colors.primary : "transparent")};
`;
