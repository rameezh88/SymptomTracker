import { useState } from "react";
import SymptomsContext from "../../SymptomsContext";
import { Symptom } from "../../../types";

// Provider that keeps track of all the created symptoms and allows them to be added to the symptom tracker
const SymptomsContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);

  const addSymptom = (symptom: Symptom) => {
    setSymptoms([...symptoms, symptom]);
  };

  return (
    <SymptomsContext.Provider value={{ symptoms, addSymptom }}>
      {children}
    </SymptomsContext.Provider>
  );
};

export default SymptomsContextProvider;
