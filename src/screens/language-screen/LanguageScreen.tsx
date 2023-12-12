import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import { i18nTranslate } from "../../i18n";
import I18n from "i18n-js";

const LanguageScreen = () => {
  const [first, setFirst] = useState(false); //temporal state for re-render texts
  return (
    <View style={styles.container}>
      <Text>Language Test Screen</Text>
      <Button
        title="Change language to Espanish"
        onPress={() => {
          I18n.locale = "es";
          setFirst((state) => !state); //temporal state for re-render texts
        }}
      />
      <Button
        title="Change language to French"
        onPress={() => {
          I18n.locale = "fr";
          setFirst((state) => !state); //temporal state for re-render texts
        }}
      />
      <Button
        title="Change language to English"
        onPress={() => {
          I18n.locale = "en";
          setFirst((state) => !state); //temporal state for re-render texts
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
