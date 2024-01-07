import { Keyboard } from "react-native";
import { SymptomTrackerUpdateComponent } from "../../../screens/SymptomTrackerScreen";
import { Title } from "../../common";
import { Container, NameEntryField } from "./styles";

export interface NameEntryProps extends SymptomTrackerUpdateComponent {}

const NameEntry: React.FC<NameEntryProps> = ({ value, onValueChange }) => {
  return (
    <Container onTouchStart={Keyboard.dismiss}>
      <Title>What are you feeling?</Title>
      <NameEntryField
        placeholder="Pain, Nausea, etc..."
        value={value as string}
        onChangeText={onValueChange}
      />
    </Container>
  );
};

export default NameEntry;
