import AnimatedLottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
import { Title } from "../../common";
import { Container } from "./styles";
import Animated from "react-native-reanimated";
import { entryAnimation } from "../../common/animations";

const TrackingDone: React.FC = () => {
  const animationRef = useRef<AnimatedLottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <Container>
      <Animated.View entering={entryAnimation.duration(200)}>
        <Title>All done!</Title>
      </Animated.View>
      {/* Show a done Lottie animation after all the steps are completed */}
      <AnimatedLottieView
        ref={animationRef}
        source={require("../../../assets/animations/successfully-done.json")}
        autoPlay
        loop={false}
      />
    </Container>
  );
};

export default TrackingDone;
