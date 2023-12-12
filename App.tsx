import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import "./src/i18n";
import TestScreen from "./src/screens/test-screen/TestScreen";
import LanguageScreen from "./src/screens/language-screen/LanguageScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TestScreen prop5={true} />
      <LanguageScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
