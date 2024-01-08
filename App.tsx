import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import RootNavigator from "./src/navigation";
import SymptomsContextProvider from "./src/contexts/providers/SymptomsContextProvider";

export default function App() {
  return (
    <NavigationContainer>
      {/* SymptomsContextProvider: Context provider for SymptomsContext that stores tracked symptoms */}
      <SymptomsContextProvider>
        <View style={styles.container}>
          {/* PaperProvider: Provider to display components like dialog by react-native-paper */}
          <PaperProvider>
            <StatusBar style="light" />
            <RootNavigator />
          </PaperProvider>
        </View>
      </SymptomsContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
