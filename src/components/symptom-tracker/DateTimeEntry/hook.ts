import { useEffect, useMemo, useState } from "react";
import { DateTimeEntryProps } from ".";
import { DateTimePickerMode } from "../../DateTimePickerDialog";
import { format } from "date-fns";

const useHook = ({ value, onValueChange }: DateTimeEntryProps) => {
  // Date value initialed if it has already been set
  const [date, setDate] = useState<Date | null>(() => {
    if (value && value instanceof Date) {
      return value;
    }
    return null;
  });
  // Time value initialed if it has already been set
  const [time, setTime] = useState<Date | null>(() => {
    if (value && value instanceof Date) {
      return value;
    }
    return null;
  });
  // Determines if the date and time picker modal should be visible
  const [dateTimePickerVisible, setDateTimePickerVisible] =
    useState<boolean>(false);
  // Determines the mode of the date and time picker. eg. "date" or "time"
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

  // Calculates the date and time string based on the date and time value selected using
  // preset formats
  const { dateString, timeString } = useMemo(
    () => ({
      dateString: date ? format(date, "dd-MM-yyyy") : "Pick a date",
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
        // Updates the date and time value in the SymptomTrackerScreen parent component
        onValueChange(fullDate);
      }
    }
  }, [date, time]);

  return {
    dateString,
    timeString,
    dateTimePickerVisible,
    dateTimePickerMode,
    handleOpenDateTimePicker,
    hideDialog,
    onDateValueSelected,
  };
};

export default useHook;
