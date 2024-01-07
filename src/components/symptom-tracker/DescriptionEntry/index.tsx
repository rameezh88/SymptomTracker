import { Keyboard } from "react-native";
import { SymptomTrackerUpdateComponent } from "../../../screens/SymptomTrackerScreen";
import { Title } from "../../common";
import { Container, DescriptionEntryField } from "./styles";
import { useState } from "react";

export interface DescriptionEntryProps extends SymptomTrackerUpdateComponent {}

const DescriptionEntry: React.FC<DescriptionEntryProps> = ({
  value,
  onValueChange,
}) => {
  // Keeps track of the focus state of the description entry
  // So we can update the background color.
  const [inputFocused, setInputFocused] = useState(false);
  return (
    <Container onTouchStart={Keyboard.dismiss}>
      <Title>Anything else to add..?</Title>
      <DescriptionEntryField
        focused={inputFocused}
        placeholder="Describe what you felt..."
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        value={value as string}
        onChangeText={onValueChange}
      />
    </Container>
  );
};

export default DescriptionEntry;
