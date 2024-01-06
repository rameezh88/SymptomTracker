import { NavigationProp } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../../navigation";

interface HomeScreenProps {
  navigation: NavigationProp<RootStackParamList, "HomeScreen">;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
      <Button
        onPress={() => navigation.navigate("SymptomTrackerScreen")}
        title="Open Symptom Tracker"
      />
    </View>
  );
};

export default HomeScreen;
