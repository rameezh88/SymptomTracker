import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { isEmpty } from "lodash";
import { useContext, useMemo, useState } from "react";
import { Double } from "react-native/Libraries/Types/CodegenTypes";
import { RootStackParamList } from "../../navigation";
import { Symptom, SymptomEntryType, SymptomSeverity } from "../../types";
import { steps } from "./constants";
import {
  BottomContainer,
  CloseButton,
  Container,
  DummyView,
  FinishButton,
  FinishButtonText,
  Header,
  NextButton,
  PreviousButton,
  Progress,
  TopContainer,
} from "./styles";
import SymptomsContext from "../../contexts/SymptomsContext";
import Animated, { FadeIn } from "react-native-reanimated";
import { commonStyles } from "../../components/common";
import { GestureDetector } from "react-native-gesture-handler";
import useClickAnimation from "../../components/common/hooks/useClickAnimation";

interface SymptomTrackerScreenProps {
  navigation: NavigationProp<RootStackParamList, "SymptomTrackerScreen">;
}

export type SymptomValue = string | Date | SymptomSeverity;

export interface SymptomTrackerUpdateComponent {
  value?: SymptomValue | null;
  onValueChange?: (value: SymptomValue) => void;
}

const SymptomTrackerScreen: React.FC<SymptomTrackerScreenProps> = ({
  navigation,
}) => {
  // Get function to add symptom to symptom tracked in the wrapping context
  const { addSymptom } = useContext(SymptomsContext);
  // Keeps track of the current step in the symptom tracker.
  const [currentStep, setCurrentStep] = useState(0);
  // State object where all the symptom fields will be recorded
  const [symptom, setSymptom] = useState<Symptom>({
    name: null,
    date: null,
    severity: null,
    description: "",
  });

  const { tap, animatedStyles: bounceClickAnimatedStyles } =
    useClickAnimation();

  const handlePreviousPress = () => {
    // Go to the previous symptom tracking step
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleNextPress = () => {
    // Go to the next symptom tracking step
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }

    if (currentStep === steps.length - 2) {
      // If we're on the last entry step (description), save the symptom
      addSymptom(symptom);
    }
  };

  const handleClosePress = () => {
    navigation.goBack();
  };

  const { currentValue, nextButtonDisabled } = useMemo(() => {
    // Returns the following:
    // currentValue: The current value of the symptom in the current step
    // nextButtonDisabled: Whether or not the next button should be disabled
    const field = steps[currentStep].symptomField;
    const currentValue = field ? symptom[field] : null;

    let nextButtonDisabled = false;
    switch (field) {
      // Unique check for each of the symptom fields if the value is
      // valid or not
      case SymptomEntryType.Name:
        nextButtonDisabled = isEmpty(currentValue);
        break;
      case SymptomEntryType.Date:
      case SymptomEntryType.Severity:
        nextButtonDisabled = !currentValue;
        break;
      default:
        nextButtonDisabled = false;
        break;
    }
    return {
      currentValue,
      nextButtonDisabled,
    };
  }, [currentStep, symptom]);

  const { Component, nextButtonVisible, previousButtonVisible, progress } =
    useMemo(() => {
      // Calculates and returns the following:
      // Component: The component to be rendered in the symptom tracker
      // nextButtonVisible: Whether or not the next button should be visible. Eg. It should be hidden in the final step.
      // previousButtonVisible: Whether or not the previous button should be visible. Eg. It should be hidden in the first and final steps.
      // progress: The value that indicates the progress in percentage of the symptom tracker
      return {
        previousButtonVisible:
          currentStep > 0 && currentStep < steps.length - 1,
        nextButtonVisible: currentStep < steps.length - 1,
        Component: steps[currentStep].Component,
        currentValue,
        progress: currentStep / ((steps.length - 1) as Double),
      };
    }, [currentStep]);

  const handleValueChange = (value: SymptomValue) => {
    let field = steps[currentStep].symptomField;
    if (field) {
      setSymptom({ ...symptom, [field]: value });
    }
  };

  return (
    <Container>
      <Header>
        {/* Shows how far along you are in the symptom tracker. */}
        <Progress progress={progress} />
        <CloseButton onPress={handleClosePress}>
          <Ionicons name="close" size={32} color="black" />
        </CloseButton>
      </Header>
      <TopContainer>
        <Component value={currentValue} onValueChange={handleValueChange} />
      </TopContainer>
      <BottomContainer>
        {!nextButtonVisible && !previousButtonVisible && (
          // Finish button with click animation
          <GestureDetector gesture={tap}>
            <Animated.View
              style={[
                commonStyles.animationContainer,
                bounceClickAnimatedStyles,
              ]}
              entering={FadeIn}
            >
              <FinishButton onPress={handleClosePress}>
                <FinishButtonText>Finish</FinishButtonText>
              </FinishButton>
            </Animated.View>
          </GestureDetector>
        )}
        {previousButtonVisible ? (
          <PreviousButton onPress={handlePreviousPress}>
            <FontAwesome name="arrow-left" size={24} color="white" />
          </PreviousButton>
        ) : (
          // Just a dummy view of the same size as the hidden button
          <DummyView />
        )}
        {nextButtonVisible ? (
          <NextButton disabled={nextButtonDisabled} onPress={handleNextPress}>
            <FontAwesome
              name={currentStep < steps.length - 2 ? "arrow-right" : "check"}
              size={24}
              color="white"
            />
          </NextButton>
        ) : (
          // Just a dummy view of the same size as the hidden button
          <DummyView />
        )}
      </BottomContainer>
    </Container>
  );
};

export default SymptomTrackerScreen;
