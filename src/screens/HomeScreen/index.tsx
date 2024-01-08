import { Entypo } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import SymptomListItem from "../../components/SymptomListItem";
import { dummyData } from "../../dummy";
import { RootStackParamList } from "../../navigation";
import { AddNewSymptomButton, Container, Placeholder } from "./styles";
import { useContext } from "react";
import SymptomsContext from "../../contexts/SymptomsContext";

interface HomeScreenProps {
  navigation: NavigationProp<RootStackParamList, "HomeScreen">;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  // Get stored symptoms from the wrapping context
  const { symptoms } = useContext(SymptomsContext);

  return (
    <Container>
      {/* Show symptoms when we have them */}
      {symptoms.length > 0 && (
        <FlashList
          data={symptoms}
          renderItem={({ item }) => <SymptomListItem symptom={item} />}
          estimatedItemSize={200}
        />
      )}
      {/* Show a placeholder when we have no symptoms */}
      {!symptoms ||
        (symptoms.length === 0 && (
          <Placeholder>
            {`This is where your tracked symptoms show up.\n\nClick on the button below to add a new symptom!`}{" "}
          </Placeholder>
        ))}
      {/* Add symptom button that navigates to the symptom-tracker modal */}
      <AddNewSymptomButton
        onPress={() => navigation.navigate("SymptomTrackerScreen")}
      >
        <Entypo name="plus" size={32} color="white" />
      </AddNewSymptomButton>
    </Container>
  );
};

export default HomeScreen;
