import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import "./src/i18n";
import ExampleReduxScreen from "./src/screens/exampleRedux-screen/ExampleReduxScreen";
import LanguageScreen from "./src/screens/language-screen/LanguageScreen";
import TestScreen from "./src/screens/test-screen/TestScreen";
import { store } from "./src/store";
import Navigation from "./src/navigattion/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </Provider>
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
