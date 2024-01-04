import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonComponent from '../../components/ButtonComponent'
import SearchComponent from '../../components/SearchComponent'
import { i18nTranslate } from '../../i18n'

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{i18nTranslate("login.welcome-back")}</Text>
      </View>
      <View style={styles.inputContainer}>
        <SearchComponent
            onChange={()=>{}}
            placeholder={i18nTranslate("login.email")}
            value=''
            containerStyle={{
                width: "100%"
            }}
            inputStyle={{
                width: "100%",
                color: "white",
                borderColor: "white"
            }}
        />
        <SearchComponent
            onChange={()=>{}}
            placeholder={i18nTranslate("login.password")}
            value=''
            containerStyle={{
                width: "100%"
            }}
            inputStyle={{
                width: "100%",
                color: "white",
                borderColor: "white"
            }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{i18nTranslate("login.forgot")}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent 
            title={i18nTranslate("login.sign-in")} 
            onPress={()=>{}}
            containerStyle={{
              borderRadius: 8,
              padding: 10,
              backgroundColor: "gray"
            }}
            textStyle={{
                textAlign: "center",
                color: "white"
            }}  
        />
        <View style={styles.orContainer}>
            <View style={styles.line}/>
            <Text style={styles.orText}>{i18nTranslate("login.or")}</Text>
            <View style={styles.line}/>
        </View>
        <ButtonComponent 
            title={i18nTranslate("login.sign-up")}
            onPress={()=>{}}
            containerStyle={{
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

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 50,
        paddingTop: 150
      },
      titleContainer: {
        flex: 2,
        width: "80%",
        // backgroundColor: "pink"
      },
      title: {
        fontSize: 20,
        color: "white"
        // backgroundColor: "green",
      },
      inputContainer: {
        flex: 1,
        // backgroundColor: "green",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        gap: 30
      },
      textContainer: {
        // backgroundColor: "red",
        width: "80%",
        alignItems: "flex-end"
      },
      text: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white"
      },
      buttonContainer: {
        flex: 2,
        // backgroundColor: "yellow",
        justifyContent: "center",
        width: "80%",
        gap: 15
      },
      orContainer: {
        flexDirection: "row",
        alignItems: "center"
      },
      line: {
        flex: 1,
        height: 0.5,
        backgroundColor: "white"
      },
      orText: {
        marginHorizontal: 10,
        color: "white"
      }
})