import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import TestScreen from "./src/screens/test-screen/TestScreen";
import "./src/i18n";
import I18n from "i18n-js";

export default function App() {
  //add develop branch
  return (
    <View style={styles.container}>
      <TestScreen prop5={true} />
      <Text>{I18n.t("test.hello")}</Text>
      <Text>{I18n.t("test2")}</Text>
      <Button
        title="Change language"
        onPress={() => {
          I18n.locale = "es";
        }}
      />
      <StatusBar style="auto" />
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
