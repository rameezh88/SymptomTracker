import { Text } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding-horizontal: 15px;
  margin-vertical: 10px;
  width: 100%;
`;

export const LeftContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const RightContainer = styled.View`
  align-items: flex-end;
  justify-content: space-between;
`;

export const Name = styled(Text)`
  font-size: 20px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Description = styled(Text)`
  font-size: 16px;
  font-style: italic;
`;

export const DateTime = styled(Text)`
  margin-left: 5px;
  font-size: 14px;
  color: grey;
  margin-bottom: 10px;
`;
