import { StyleSheet, Text, View } from "react-native";
import React from "react";

type TestComponentGeneralPropsTypes = {
  prop1: string;
  prop2: number;
};

const TestComponentGeneral = (props: TestComponentGeneralPropsTypes) => {
  const { prop1, prop2 } = props;
  return (
    <View>
      <Text>TestComponentGeneral</Text>
    </View>
  );
};

export default TestComponentGeneral;

const styles = StyleSheet.create({});
