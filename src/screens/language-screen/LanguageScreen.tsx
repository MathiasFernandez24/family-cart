import I18n from "i18n-js";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { enabledLanguages, i18nTranslate } from "../../i18n";
import { setLanguage } from "../../store/slices/settingsSlice";

const LanguageScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Language Test Screen</Text>
      <Button
        title="Change language to Espanish"
        onPress={() => {
          I18n.locale = enabledLanguages.spanish.key;
          dispatch(setLanguage(enabledLanguages.spanish.value));
        }}
      />
      <Button
        title="Change language to French"
        onPress={() => {
          I18n.locale = enabledLanguages.french.key;
          dispatch(setLanguage(enabledLanguages.french.value));
        }}
      />
      <Button
        title="Change language to English"
        onPress={() => {
          I18n.locale = enabledLanguages.english.key;
          dispatch(setLanguage(enabledLanguages.english.value));
        }}
      />
      <Text>Saludo: {i18nTranslate("test.hello")}</Text>
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: { backgroundColor: "pink", padding: 10 },
});
