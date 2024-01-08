import { GestureDetector } from "react-native-gesture-handler";
import Animated, { ComplexAnimationBuilder } from "react-native-reanimated";
import useClickAnimation from "../../common/hooks/useClickAnimation";
import { SeverityScaleItem } from "../SeveritySelector";
import { Severity, SeverityOptionButton, SeverityTitle } from "./styles";

interface SeveritySelectorOptionProps {
  entryAnimation: ComplexAnimationBuilder;
  severityScaleItem: SeverityScaleItem;
  handleSeveritySelected: (severity: SeverityScaleItem) => void;
}

// Element that shows each severity option that can be selected
const SeveritySelectorOption: React.FC<SeveritySelectorOptionProps> = ({
  entryAnimation,
  severityScaleItem,
  handleSeveritySelected,
}) => {
  const { tap, animatedStyles } = useClickAnimation();
  return (
    <GestureDetector gesture={tap}>
      <Animated.View entering={entryAnimation} style={animatedStyles}>
        <SeverityOptionButton
          selected={severityScaleItem.selected}
          onPress={() => {
            handleSeveritySelected(severityScaleItem);
          }}
        >
          <Severity severity={severityScaleItem.severity} />
          <SeverityTitle>{severityScaleItem.title}</SeverityTitle>
        </SeverityOptionButton>
      </Animated.View>
    </GestureDetector>
  );
};

export default SeveritySelectorOption;
