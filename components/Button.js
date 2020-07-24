import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const Button = ({ text, backgroundColor, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      <Text style={{ color: color, fontSize: 20 }}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    width: 200,
    maxHeight: 50,
  }
})

export default Button
