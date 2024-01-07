import { Text } from "react-native";
import { SymptomTrackerUpdateComponent } from ".";
import NameEntry from "../../components/symptom-tracker/NameEntry";
import { SymptomEntryType } from "../../types";
import DateTimeEntry from "../../components/symptom-tracker/DateTimeEntry";
import SeveritySelector from "../../components/symptom-tracker/SeveritySelector";

export interface SymptomTrackerScreenStep {
  symptomField?: SymptomEntryType;
  Component: React.FC<SymptomTrackerUpdateComponent>;
}

export const steps: SymptomTrackerScreenStep[] = [
  {
    symptomField: SymptomEntryType.Name,
    Component: NameEntry,
  },
  {
    symptomField: SymptomEntryType.Date,
    Component: DateTimeEntry,
  },
  {
    symptomField: SymptomEntryType.Severity,
    Component: SeveritySelector,
  },
  {
    symptomField: SymptomEntryType.Description,
    Component: () => <Text>Description</Text>,
  },
  {
    Component: () => <Text>All done!</Text>,
  },
];
