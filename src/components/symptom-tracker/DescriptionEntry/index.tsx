import { useState } from "react";
import { Keyboard } from "react-native";
import Animated from "react-native-reanimated";
import { SymptomTrackerUpdateComponent } from "../../../screens/SymptomTrackerScreen";
import { Title, commonStyles } from "../../common";
import { entryAnimation } from "../../common/animations";
import { Container, DescriptionEntryField, styles } from "./styles";

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
      <Animated.View entering={entryAnimation.duration(200)}>
        <Title>Anything else to add..?</Title>
      </Animated.View>

      <Animated.View
        style={styles.animationContainer}
        entering={entryAnimation.delay(100)}
      >
        <DescriptionEntryField
          focused={inputFocused}
          placeholder="Describe what you felt..."
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          value={value as string}
          onChangeText={onValueChange}
        />
      </Animated.View>
    </Container>
  );
};

export default DescriptionEntry;
