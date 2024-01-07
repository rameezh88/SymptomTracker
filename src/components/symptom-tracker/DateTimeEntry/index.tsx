import { format } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { Keyboard } from "react-native";
import { SymptomTrackerUpdateComponent } from "../../../screens/SymptomTrackerScreen";
import DateTimePickerDialog, {
  DateTimePickerMode,
} from "../../DateTimePickerDialog";
import { Title } from "../../common";
import { Container, DateTimeEntryFieldWrapper } from "./styles";
import { Text } from "react-native-paper";

export interface DateTimeEntryProps extends SymptomTrackerUpdateComponent {}

const DateTimeEntry: React.FC<DateTimeEntryProps> = ({
  value,
  onValueChange,
}) => {
  const [date, setDate] = useState<Date | null>(() => {
    if (value && value instanceof Date) {
      return value;
    }
    return null;
  });
  const [time, setTime] = useState<Date | null>(() => {
    if (value && value instanceof Date) {
      return value;
    }
    return null;
  });
  const [dateTimePickerVisible, setDateTimePickerVisible] =
    useState<boolean>(false);
  const [dateTimePickerMode, setDateTimePickerMode] =
    useState<DateTimePickerMode>("date");

  const handleOpenDateTimePicker = (mode: DateTimePickerMode) => {
    setDateTimePickerVisible(true);
    setDateTimePickerMode(mode);
  };

  const hideDialog = () => {
    setDateTimePickerVisible(false);
  };

  const onDateValueSelected = (
    dateTime: Date | null,
    mode: DateTimePickerMode
  ) => {
    if (mode === "date") {
      setDate(dateTime);
    } else if (mode === "time") {
      setTime(dateTime);
    }
  };

  const { dateString, timeString } = useMemo(
    () => ({
      dateString: date ? format(date, "yyyy-MM-dd") : "Pick a date",
      timeString: time ? format(time, "HH:mm") : "Pick a time",
    }),
    [date, time]
  );

  useEffect(() => {
    if ((date || time) && onValueChange) {
      let fullDate;
      if (date) {
        fullDate = new Date(date.toDateString());
      }

      if (date && time) {
        fullDate = new Date(date.toDateString() + " " + time.toTimeString());
      }

      if (fullDate) {
        onValueChange(fullDate);
      }
    }
  }, [date, time]);

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
