import { StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'

type searchComponentTypes = {
    placeholder: string;
    onChange: () => void;
    value: string;
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
  };

const SearchComponent = (props: searchComponentTypes) => {

    const { placeholder, onChange, value, containerStyle, inputStyle } = props

  return (
    <View style={[styles.searchContainer, containerStyle]}>
      <TextInput 
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </View>
  )
}

export default SearchComponent

const styles = StyleSheet.create({
    searchContainer: {},
    input: {
        borderBottomWidth: 1,
        width: 200
    },
})