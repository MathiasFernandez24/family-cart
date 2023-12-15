import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import "./src/i18n";
import Navigation from "./src/navigattion/Navigation";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({});
