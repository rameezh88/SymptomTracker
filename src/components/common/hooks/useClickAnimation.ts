import { Gesture } from "react-native-gesture-handler";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { clickAnimation } from "../animations";

const useClickAnimation = () => {
  // Hook that gives the tap gesture and the click animation
  // that can be used for any button interaction.
  const pressed = useSharedValue(false);

  const tap = Gesture.Tap()
    .onBegin(() => {
      pressed.value = true;
    })
    .onFinalize(() => {
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => clickAnimation(pressed));

  return {
    tap,
    animatedStyles,
  };
};

export default useClickAnimation;
