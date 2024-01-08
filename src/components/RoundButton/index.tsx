import { GestureDetector } from "react-native-gesture-handler";
import Animated, { FadeOut } from "react-native-reanimated";
import useClickAnimation from "../common/hooks/useClickAnimation";
import { Container } from "./styles";

export type RoundButtonProps = {
  onPress: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
};

const RoundButton: React.FC<RoundButtonProps> = ({
  onPress,
  children,
  disabled = false,
}) => {
  const { tap, animatedStyles } = useClickAnimation();
  return (
    <GestureDetector gesture={tap}>
      <Animated.View exiting={FadeOut} style={animatedStyles}>
        <Container
          disabled={disabled}
          onPress={() => {
            if (!disabled) {
              onPress();
            }
          }}
        >
          {children}
        </Container>
      </Animated.View>
    </GestureDetector>
  );
};

export default RoundButton;
