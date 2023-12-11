import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TestScreen from "./src/screens/test-screen/TestScreen";

export default function App() {
  //add develop branch
  return (
    <View style={styles.container}>
      <TestScreen prop5={true} />
      {/* <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" /> */}
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
