import { useState } from "react";
import { SymptomSeverity } from "../../types";
import {
  Container,
  Severity,
  SeverityOptionButton,
  SeverityTitle,
} from "./styles";

interface SeverityScaleItem {
  title: string;
  severity: SymptomSeverity;
  selected: boolean;
}

const severityScaleInitalValue: SeverityScaleItem[] = [
  { title: "Very Low", severity: SymptomSeverity.VeryLow, selected: false },
  { title: "Low", severity: SymptomSeverity.Low, selected: false },
  { title: "Medium", severity: SymptomSeverity.Medium, selected: false },
  { title: "High", severity: SymptomSeverity.High, selected: false },
  { title: "Very High", severity: SymptomSeverity.VeryHigh, selected: false },
];

const SeveritySelector = () => {
  const [severityScale, setSeverityScale] = useState(severityScaleInitalValue);

  const handleSeveritySelected = (severity: SeverityScaleItem) => {
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
  };

  return (
    <Container>
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
    </Container>
  );
};

export default SeveritySelector;
