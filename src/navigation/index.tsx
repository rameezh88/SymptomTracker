import HomeScreen from "../screens/HomeScreen";
import SymptomTrackerScreen from "../screens/SymptomTrackerScreen";
import { createStackNavigator } from "@react-navigation/stack";

export type RootStackParamList = {
  HomeScreen: undefined;
  SymptomTrackerScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: true }}
      />
      <RootStack.Screen
        name="SymptomTrackerScreen"
        component={SymptomTrackerScreen}
        options={{ presentation: "modal", headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
