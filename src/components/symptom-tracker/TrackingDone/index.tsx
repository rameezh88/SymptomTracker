import AnimatedLottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
import { Title } from "../../common";
import { Container } from "./styles";

const TrackingDone: React.FC = () => {
  const animationRef = useRef<AnimatedLottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <Container>
      <Title>All done!</Title>
      {/* Show a done animation after all the steps are completed */}
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
