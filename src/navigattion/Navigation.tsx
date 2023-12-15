import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectCounter } from "../store/slices/exampleCounterSlice";
import LanguageScreen from "../screens/language-screen/LanguageScreen";
import ExampleReduxScreen from "../screens/exampleRedux-screen/ExampleReduxScreen";
import { i18nTranslate } from "../i18n";
import { getLanguage } from "../store/slices/settingsSlice";

const Navigation = () => {
  // const {counter} = useSelector((state) => state.counterStore);
  const language = useSelector(getLanguage);

  return (
    <View>
      <LanguageScreen />
      <ExampleReduxScreen />
      <Text>{i18nTranslate("test.hello")}</Text>
      <Text>{language}</Text>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
