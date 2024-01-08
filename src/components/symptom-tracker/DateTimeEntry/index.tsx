import { Keyboard, Platform } from "react-native";
import { Text } from "react-native-paper";
import { SymptomTrackerUpdateComponent } from "../../../screens/SymptomTrackerScreen";
import DateTimePickerDialog from "../../DateTimePickerDialog";
import { Title, commonStyles } from "../../common";
import useHook from "./hook";
import { Container, DateTimeEntryFieldWrapper } from "./styles";
import Animated from "react-native-reanimated";
import { entryAnimation } from "../../common/animations";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export interface DateTimeEntryProps extends SymptomTrackerUpdateComponent {}

const DateTimeEntry: React.FC<DateTimeEntryProps> = (props) => {
  // Hook for handling all the business logic
  const {
    datePickerValue,
    dateString,
    timeString,
    dateTimePickerVisible,
    dateTimePickerMode,
    handleOpenDateTimePicker,
    hideDialog,
    onDateValueSelected,
    onAndroidDatePickerChange,
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
        {/* Field to pick and show only the date */}
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
        {/* Field to pick and show only the time */}
        <DateTimeEntryFieldWrapper
          onPress={() => {
            handleOpenDateTimePicker("time");
          }}
        >
          <Text variant="bodyLarge">{timeString}</Text>
        </DateTimeEntryFieldWrapper>
      </Animated.View>

      {dateTimePickerVisible && Platform.OS === "android" && (
        // Show the default date and time picker for Android
        <RNDateTimePicker
          value={datePickerValue || new Date()}
          mode={dateTimePickerMode}
          is24Hour={true}
          onChange={onAndroidDatePickerChange}
        />
      )}
      {/* Show the date and time picker in a custom dialog for iOS. */}
      <DateTimePickerDialog
        hideDialog={hideDialog}
        onValueSelected={onDateValueSelected}
        mode={dateTimePickerMode}
        visible={dateTimePickerVisible && Platform.OS === "ios"}
      />
    </Container>
  );
};

export default DateTimeEntry;
