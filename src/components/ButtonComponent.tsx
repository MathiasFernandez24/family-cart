import { Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'

type buttonComponentTypes = {
    title: string;
    onPress: () => void;
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
  };

const ButtonComponent = (props: buttonComponentTypes) => {

    const { title, onPress, containerStyle, textStyle } = props

  return (
    <Pressable 
        style={[styles.buttonContainer, containerStyle]}
        onPress={onPress}
    >
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </Pressable>
    
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
    buttonContainer: {
        // backgroundColor: "yellow"
    },
    buttonText: {
        // fontSize: 18
    },

})