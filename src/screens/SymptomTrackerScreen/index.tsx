import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { RootStackParamList } from "../../navigation";
import { Symptom, SymptomEntryType } from "../../types";
import {
  BottomContainer,
  CloseButton,
  Container,
  DummyView,
  Header,
  NextButton,
  PreviousButton,
  TopContainer,
} from "./styles";
import { steps } from "./constants";
import { isEmpty } from "lodash";

interface SymptomTrackerScreenProps {
  navigation: NavigationProp<RootStackParamList, "SymptomTrackerScreen">;
}

export type SymptomValue = string | Date;

export interface SymptomTrackerUpdateComponent {
  value?: SymptomValue;
  onValueChange?: (value: SymptomValue) => void;
}

const SymptomTrackerScreen: React.FC<SymptomTrackerScreenProps> = ({
  navigation,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [symptom, setSymptom] = useState<Symptom>({
    name: null,
    date: null,
    severity: null,
    description: "",
  });

  const handlePreviousPress = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleNextPress = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleClosePress = () => {
    navigation.goBack();
  };

  const { currentValue, nextButtonDisabled } = useMemo(() => {
    // console.log(
    //   "Current symptom field",
    //   steps[currentStep].symptomField,
    //   symptom
    // );
    const field = steps[currentStep].symptomField;
    const currentValue = field ? symptom[field] : null;

    let nextButtonDisabled = false;
    switch (field) {
      case SymptomEntryType.Name:
        nextButtonDisabled = isEmpty(currentValue);
        break;
      case SymptomEntryType.Date:
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

  const { Component, nextButtonVisible, previousButtonVisible } =
    useMemo(() => {
      return {
        previousButtonVisible:
          currentStep > 0 && currentStep < steps.length - 1,
        nextButtonVisible: currentStep < steps.length - 1,
        Component: steps[currentStep].Component,
        currentValue,
      };
    }, [currentStep]);

  const handleValueChange = (value: SymptomValue) => {
    let field = steps[currentStep].symptomField;
    if (field) {
      // console.log("value changed", field, value);
      setSymptom({ ...symptom, [field]: value });
    }
  };

  return (
    <Container>
      <Header>
        <CloseButton onPress={handleClosePress}>
          <Ionicons name="close" size={32} color="black" />
        </CloseButton>
      </Header>
      <TopContainer>
        <Component value={currentValue} onValueChange={handleValueChange} />
      </TopContainer>
      <BottomContainer>
        {previousButtonVisible ? (
          <PreviousButton onPress={handlePreviousPress}>
            <FontAwesome name="arrow-left" size={24} color="white" />
          </PreviousButton>
        ) : (
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
          <DummyView />
        )}
      </BottomContainer>
    </Container>
  );
};

export default SymptomTrackerScreen;
