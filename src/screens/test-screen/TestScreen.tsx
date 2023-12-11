import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TestComponent1 from "./components/TestComponent1";

type testScreenPropsTypes = {
  prop1?: string;
  prop2?: number;
  prop3?: [];
  prop4?: () => void;
  prop5: boolean;
};

const TestScreen = (props: testScreenPropsTypes) => {
  const { prop1 = "initialValue", prop2, prop3, prop4, prop5 } = props;

  return (
    <View>
      <Text>{prop1}</Text>
      <TestComponent1 />
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({});
