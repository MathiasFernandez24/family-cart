import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonComponent from '../../components/ButtonComponent'
import { i18nTranslate } from '../../i18n'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{i18nTranslate("login.welcome")}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent 
            title={i18nTranslate("login.sign-in")} 
            onPress={()=>{}}
            containerStyle={{
              borderWidth: 1,
              borderRadius: 8,
              padding: 10,
              backgroundColor: "gray"
            }}
            textStyle={{
              textAlign: "center",
              color: "white"
            }}  
        />
        <ButtonComponent 
            title={i18nTranslate("login.sign-up")} 
            onPress={()=>{}}
            containerStyle={{
              borderWidth: 1,
              borderRadius: 8,
              padding: 10,
              backgroundColor: "white"
            }}
            textStyle={{
              textAlign: "center"
            }}
        />
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
    paddingTop: 400
  },
  titleContainer: {
    flex: 1,
    width: "80%",
    // backgroundColor: "pink"
  },
  title: {
    fontSize: 20,
    color: "white"
    // backgroundColor: "green",
  },
  buttonContainer: {
    flex: 3,
    // backgroundColor: "yellow",
    justifyContent: "center",
    width: "80%",
    gap: 20
  }
})