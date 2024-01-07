import { useState } from "react";
import { SymptomSeverity } from "../../types";
import {
  Container,
  OptionsContainer,
  Severity,
  SeverityOptionButton,
  SeverityTitle,
} from "./styles";
import { SymptomTrackerUpdateComponent } from "../../screens/SymptomTrackerScreen";
import { Title } from "../common";

interface SeverityScaleItem {
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
      <Title>What's the severity?</Title>
      <OptionsContainer>
        {severityScale.map((item, index) => (
          <SeverityOptionButton
            selected={item.selected}
            onPress={() => {
              handleSeveritySelected(item);
            }}
            key={index}
          >
            <Severity severity={item.severity} />
            <SeverityTitle>{item.title}</SeverityTitle>
          </SeverityOptionButton>
        ))}
      </OptionsContainer>
    </Container>
  );
};

export default SeveritySelector;
