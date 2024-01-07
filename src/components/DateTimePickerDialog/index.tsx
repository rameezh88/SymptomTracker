import { Ionicons } from "@expo/vector-icons";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import { Button, Dialog, Portal } from "react-native-paper";
import styled from "styled-components/native";
import { Title } from "../common";

export type DateTimePickerMode = "date" | "time";

export type DateTimePickerDialogProps = {
  visible: boolean;
  mode: DateTimePickerMode;
  hideDialog: () => void;
  onValueSelected: (date: Date, mode: DateTimePickerMode) => void;
};

const DateTimePickerDialog: React.FC<DateTimePickerDialogProps> = ({
  mode,
  visible,
  hideDialog,
  onValueSelected,
}) => {
  const [rawDateValue, setRawDateValue] = useState<Date>(new Date());

  const onDateChange = (_: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) {
      setRawDateValue(selectedDate);
    }
  };

  const handleDonePress = () => {
    if (rawDateValue) {
      onValueSelected(rawDateValue, mode);
    }
    hideDialog();
  };

  const handleClose = () => {
    hideDialog();
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <TitleContainer>
          <Title>{`Pick a ${mode}`}</Title>
          <Pressable onPress={handleClose}>
            <Ionicons name="close-outline" size={30} color="black" />
          </Pressable>
        </TitleContainer>
        <Dialog.Content>
          <RNDateTimePicker
            testID="dateTimePicker"
            value={rawDateValue || new Date()}
            mode={mode}
            is24Hour={true}
            onChange={onDateChange}
            display="spinner"
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleDonePress}>
            <Text>Done</Text>
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const TitleContainer = styled.View`
  flex-direction: "row";
  margin-left: 25px;
  margin-right: 20px;
  justify-content: space-between;
`;

export default DateTimePickerDialog;
