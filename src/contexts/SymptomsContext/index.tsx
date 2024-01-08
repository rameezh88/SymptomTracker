import { createContext } from "react";
import { Symptom } from "../../types";

export interface SymptomsContextProps {
  // Tracked symptoms
  symptoms: Symptom[];
  // Function to add a symptom to the symptoms tracked in the wrapping context
  addSymptom: (symptom: Symptom) => void;
}

const SymptomsContext = createContext<SymptomsContextProps>({
  symptoms: [],
  addSymptom: () => {},
});

export default SymptomsContext;
