import { useState } from "react";
import Animated, { ZoomIn } from "react-native-reanimated";
import { SymptomTrackerUpdateComponent } from "../../../screens/SymptomTrackerScreen";
import { SymptomSeverity } from "../../../types";
import { Title } from "../../common";
import { entryAnimation } from "../../common/animations";
import { Container, OptionsContainer } from "./styles";
import SeveritySelectorOption from "../SeveritySelectorOption";

export interface SeverityScaleItem {
  title: string;
  severity: SymptomSeverity;
  selected: boolean;
}

// All possible symptom severities
const severityScaleInitalValue: SeverityScaleItem[] = [
  { title: "Very Low", severity: SymptomSeverity.VeryLow, selected: false },
  { title: "Low", severity: SymptomSeverity.Low, selected: false },
  { title: "Medium", severity: SymptomSeverity.Medium, selected: false },
  { title: "High", severity: SymptomSeverity.High, selected: false },
  { title: "Very High", severity: SymptomSeverity.VeryHigh, selected: false },
];

export interface SeveritySelectorProps extends SymptomTrackerUpdateComponent {}

const SeveritySelector: React.FC<SeveritySelectorProps> = ({
  value,
  onValueChange,
}) => {
  // State object where all the severity options will be recorded along with the selection state
  const [severityScale, setSeverityScale] = useState<SeverityScaleItem[]>(
    () => {
      if (!value) {
        return severityScaleInitalValue;
      }

      return severityScaleInitalValue.map((item) => {
        if (item.severity === value) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return item;
      });
    }
  );

  const handleSeveritySelected = (severity: SeverityScaleItem) => {
    // Updates the selection state of the severity options
    setSeverityScale(
      severityScaleInitalValue.map((item) => {
        if (item.severity === severity.severity) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return item;
      })
    );

    if (onValueChange) {
      // Updates the severity value in the symptom tracker
      onValueChange(severity.severity);
    }
  };

  return (
    <Container>
      <Animated.View entering={entryAnimation.duration(200)}>
        <Title>What's the severity?</Title>
      </Animated.View>
      <OptionsContainer>
        {severityScale.map((item, index) => (
          <SeveritySelectorOption
            severityScaleItem={item}
            entryAnimation={ZoomIn.duration(200 + index * 60)}
            key={index}
            handleSeveritySelected={handleSeveritySelected}
          />
        ))}
      </OptionsContainer>
    </Container>
  );
};

export default SeveritySelector;
