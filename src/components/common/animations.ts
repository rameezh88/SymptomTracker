import { FadeInDown, SharedValue, withTiming } from "react-native-reanimated";

export const entryAnimation = FadeInDown;

export const clickAnimation = (pressed: SharedValue<boolean>) => {
  // "bounce" animation for a button when the user clicks
  "worklet";
  return {
    transform: [
      { scale: withTiming(pressed.value ? 1.2 : 1, { duration: 150 }) },
    ],
  };
};
