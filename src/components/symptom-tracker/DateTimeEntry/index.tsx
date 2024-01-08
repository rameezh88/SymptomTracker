import { Keyboard } from "react-native";
import { Text } from "react-native-paper";
import { SymptomTrackerUpdateComponent } from "../../../screens/SymptomTrackerScreen";
import DateTimePickerDialog from "../../DateTimePickerDialog";
import { Title, commonStyles } from "../../common";
import useHook from "./hook";
import { Container, DateTimeEntryFieldWrapper } from "./styles";
import Animated from "react-native-reanimated";
import { entryAnimation } from "../../common/animations";

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
      <Animated.View entering={entryAnimation.duration(200)}>
        <Title>When did this happen?</Title>
      </Animated.View>
      <Animated.View
        style={commonStyles.animationContainer}
        entering={entryAnimation.duration(200).delay(100)}
      >
        <DateTimeEntryFieldWrapper
          onPress={() => {
            handleOpenDateTimePicker("date");
          }}
        >
          <Text variant="bodyLarge">{dateString}</Text>
        </DateTimeEntryFieldWrapper>
      </Animated.View>
      <Animated.View
        style={commonStyles.animationContainer}
        entering={entryAnimation.duration(200).delay(200)}
      >
        <DateTimeEntryFieldWrapper
          onPress={() => {
            handleOpenDateTimePicker("time");
          }}
        >
          <Text variant="bodyLarge">{timeString}</Text>
        </DateTimeEntryFieldWrapper>
      </Animated.View>
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
