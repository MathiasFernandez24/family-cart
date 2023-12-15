import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import "./src/i18n";
import TestScreen from "./src/screens/test-screen/TestScreen";
import LanguageScreen from "./src/screens/language-screen/LanguageScreen";
import { i18nTranslate } from "./src/i18n";


export default function App() {


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
  


});
