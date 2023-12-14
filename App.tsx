import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import "./src/i18n";
import TestScreen from "./src/screens/test-screen/TestScreen";
import LanguageScreen from "./src/screens/language-screen/LanguageScreen";
import { i18nTranslate } from "./src/i18n";
import ButtonComponent from "./src/components/ButtonComponent";

export default function App() {

  const handlePress = () => {
      console.log("boton presionado");
      
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TestScreen prop5={true} />
      <LanguageScreen />
      <Text>{i18nTranslate("common.accept")}</Text>
      
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
  buttonContainer: {
    borderWidth: 2,
    borderColor: "red"
  },
  buttonText: {
    fontSize: 25
  },

});
