import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import RootNavigator from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <PaperProvider>
          <StatusBar style="light" />
          <RootNavigator />
        </PaperProvider>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
