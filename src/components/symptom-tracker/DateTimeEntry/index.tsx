import { Keyboard } from "react-native";
import { Text } from "react-native-paper";
import { SymptomTrackerUpdateComponent } from "../../../screens/SymptomTrackerScreen";
import DateTimePickerDialog from "../../DateTimePickerDialog";
import { Title } from "../../common";
import useHook from "./hook";
import { Container, DateTimeEntryFieldWrapper } from "./styles";

export interface DateTimeEntryProps extends SymptomTrackerUpdateComponent {}

const DateTimeEntry: React.FC<DateTimeEntryProps> = (props) => {
  // Hook for handling all the business logic
  const {
    dateString,
    timeString,
    dateTimePickerVisible,
    dateTimePickerMode,
    handleOpenDateTimePicker,
    hideDialog,
    onDateValueSelected,
  } = useHook(props);

  return (
    <Container onTouchStart={Keyboard.dismiss}>
      <Title>When did this happen?</Title>
      <DateTimeEntryFieldWrapper
        onPress={() => {
          handleOpenDateTimePicker("date");
        }}
      >
        <Text variant="bodyLarge">{dateString}</Text>
      </DateTimeEntryFieldWrapper>
      <DateTimeEntryFieldWrapper
        onPress={() => {
          handleOpenDateTimePicker("time");
        }}
      >
        <Text variant="bodyLarge">{timeString}</Text>
      </DateTimeEntryFieldWrapper>
      <DateTimePickerDialog
        hideDialog={hideDialog}
        onValueSelected={onDateValueSelected}
        mode={dateTimePickerMode}
        visible={dateTimePickerVisible}
      />
    </Container>
  );
};

export default DateTimeEntry;
