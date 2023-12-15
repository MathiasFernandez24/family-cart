import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCounter,
  resetCounter,
  selectCounter,
  setCounter,
} from "../../store/slices/exampleCounterSlice";
import { reducerTypes } from "../../store";

const ExampleReduxScreen = () => {
  const counter = useSelector(
    (state: reducerTypes) => state.counterStore?.counter
  );
  const counterOption2 = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <View>
      <Button
        title="Add + 1"
        onPress={() => {
          dispatch(addCounter());
        }}
      />
      <Button
        title="Reset"
        onPress={() => {
          dispatch(resetCounter());
        }}
      />
      <Button
        title="Change to 10"
        onPress={() => {
          dispatch(setCounter(10));
        }}
      />
      <Text>counter: {counter}</Text>
      <Text>counterOption2: {counterOption2}</Text>
    </View>
  );
};

export default ExampleReduxScreen;

const styles = StyleSheet.create({});
