import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { Text, View } from "react-native";
import { RootStackParamList } from "../../navigation";
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
import { useMemo, useState } from "react";

interface SymptomTrackerScreenProps {
  navigation: NavigationProp<RootStackParamList, "SymptomTrackerScreen">;
}

const steps = [
  {
    title: "What are you feeling right now?",
    symptomField: "name",
    Component: () => <Text>Name</Text>,
  },
  {
    title: "Pick a date",
    symptomField: "date",
    Component: () => <Text>Date</Text>,
  },
  {
    title: "How severe is it?",
    symptomField: "severity",
    Component: () => <Text>Severity</Text>,
  },
  {
    title: "Anything else you'd like to add?",
    symptomField: "description",
    Component: () => <Text>Description</Text>,
  },
  {
    title: "All done! Yay!",
    Component: () => <Text>All done!</Text>,
  },
];

const SymptomTrackerScreen: React.FC<SymptomTrackerScreenProps> = ({
  navigation,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

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

  const previousButtonVisible = useMemo(() => {
    return currentStep > 0 && currentStep < steps.length - 1;
  }, [currentStep]);

  const nextButtonVisible = useMemo(() => {
    return currentStep < steps.length - 1;
  }, [currentStep]);

  const { Component } = useMemo(() => {
    return steps[currentStep];
  }, [currentStep]);

  return (
    <Container
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Header>
        <CloseButton onPress={handleClosePress}>
          <Ionicons name="close" size={32} color="black" />
        </CloseButton>
      </Header>
      <TopContainer>
        <Text style={{ fontSize: 30 }}>
          <Component />
        </Text>
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
          <NextButton onPress={handleNextPress}>
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
