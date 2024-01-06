import { Entypo } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { dummyData } from "../../dummy";
import { RootStackParamList } from "../../navigation";
import {
  AddNewSymptomButton,
  Container,
  Placeholder,
  SymptomsList,
} from "./styles";
import SymptomListItem from "../../components/SymptomListItem";
import { FlashList } from "@shopify/flash-list";

interface HomeScreenProps {
  navigation: NavigationProp<RootStackParamList, "HomeScreen">;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  // const [symptoms, setSymptoms] = useState<Symptom[]>(dummyData);
  const symptoms = dummyData;

  return (
    <Container>
      {symptoms && (
        <FlashList
          data={symptoms}
          renderItem={({ item }) => <SymptomListItem symptom={item} />}
          estimatedItemSize={200}
        />
      )}
      {!symptoms && (
        <Placeholder>
          {`This is where your tracked symptoms show up.\n\nClick on the button below to add a new symptom!`}{" "}
        </Placeholder>
      )}
      <AddNewSymptomButton
        onPress={() => navigation.navigate("SymptomTrackerScreen")}
      >
        <Entypo name="plus" size={32} color="white" />
      </AddNewSymptomButton>
    </Container>
  );
};

export default HomeScreen;
