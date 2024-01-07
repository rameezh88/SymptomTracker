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

export interface SymptomTrackerUpdateComponent {
  value?: string;
  onValueChange?: (value: string) => void;
}

const SymptomTrackerScreen: React.FC<SymptomTrackerScreenProps> = ({
  navigation,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [symptom, setSymptom] = useState<Symptom>({
    name: null,
    time: "",
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
    const currentValue = steps[currentStep].symptomField
      ? symptom[steps[currentStep].symptomField]
      : null;

    let nextButtonDisabled = false;
    switch (steps[currentStep].symptomField) {
      case SymptomEntryType.Name:
        nextButtonDisabled = isEmpty(currentValue);
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

  const handleValueChange = (value: any) => {
    // console.log("value changed", value);
    let field = null;
    if (currentStep === 0) {
      field = SymptomEntryType.Name;
    }

    setSymptom({ ...symptom, [SymptomEntryType.Name]: value });
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
