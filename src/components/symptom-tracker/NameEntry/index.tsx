import { Keyboard } from "react-native";
import Animated from "react-native-reanimated";
import { SymptomTrackerUpdateComponent } from "../../../screens/SymptomTrackerScreen";
import { Title, commonStyles } from "../../common";
import { Container, NameEntryField } from "./styles";
import { entryAnimation } from "../../common/animations";

export interface NameEntryProps extends SymptomTrackerUpdateComponent {}

// Component for symptom tracker name entry
const NameEntry: React.FC<NameEntryProps> = ({ value, onValueChange }) => (
  <Container onTouchStart={Keyboard.dismiss}>
    {/* Each field is animated individually */}
    <Animated.View entering={entryAnimation.duration(200)}>
      <Title>What are you feeling?</Title>
    </Animated.View>
    {/* Each field is animated individually */}
    <Animated.View
      style={commonStyles.animationContainer}
      entering={entryAnimation.duration(200).delay(100)}
    >
      <NameEntryField
        placeholder="Pain, Nausea, etc..."
        value={value as string}
        onChangeText={onValueChange}
      />
    </Animated.View>
  </Container>
);

export default NameEntry;
