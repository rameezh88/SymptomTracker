import { FontAwesome } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { Text } from "react-native";
import { RootStackParamList } from "../../navigation";
import {
  BottomContainer,
  Container,
  NextButton,
  PreviousButton,
  TopContainer,
} from "./styles";

interface SymptomTrackerScreenProps {
  navigation: NavigationProp<RootStackParamList, "SymptomTrackerScreen">;
}

const steps = [
  {
    title: "What are you feeling right now?",
    symptomField: "name",
    Component: <Text>Name</Text>,
  },
  {
    title: "Pick a date",
    symptomField: "date",
    Component: <Text>Date</Text>,
  },
  {
    title: "How severe is it?",
    symptomField: "severity",
    Component: <Text>Severity</Text>,
  },
  {
    title: "Anything else you'd like to add?",
    symptomField: "description",
    Component: <Text>Description</Text>,
  },
  {
    title: "All done! Yay!",
    Component: <Text>All done!</Text>,
  },
];

const SymptomTrackerScreen: React.FC<SymptomTrackerScreenProps> = ({
  navigation,
}) => {
  // const [currentStep, setCurrentStep] = useState(0);

  const handlePreviousPress = () => {};
  const handleNextPress = () => {};

  return (
    <Container
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <TopContainer>
        <Text style={{ fontSize: 30 }}>
          This is the symptom tracker screen!
        </Text>
      </TopContainer>
      <BottomContainer>
        <PreviousButton onPress={handlePreviousPress}>
          <FontAwesome name="arrow-left" size={24} color="white" />
        </PreviousButton>
        <NextButton onPress={handleNextPress}>
          <FontAwesome name="arrow-right" size={24} color="white" />
        </NextButton>
      </BottomContainer>
    </Container>
  );
};

export default SymptomTrackerScreen;
