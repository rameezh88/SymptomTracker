import { Entypo } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation";
import { AddNewSymptomButton, Container, Placeholder } from "./styles";

interface HomeScreenProps {
  navigation: NavigationProp<RootStackParamList, "HomeScreen">;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <Container>
      <Placeholder>
        {`This is where your tracked symptoms show up.\n\nClick on the button below to add a new symptom!`}{" "}
      </Placeholder>
      <AddNewSymptomButton
        onPress={() => navigation.navigate("SymptomTrackerScreen")}
      >
        <Entypo name="plus" size={32} color="white" />
      </AddNewSymptomButton>
    </Container>
  );
};

export default HomeScreen;
