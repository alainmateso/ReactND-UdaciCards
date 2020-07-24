import React, { Component } from 'react'
import { View, Text } from 'react-native'

export class DeckInfo extends Component {
  render() {
    return (
      <View>
        <Text>displays the title of the Deck </Text>
        <Text>displays the number of cards in the deck</Text>
        <Text> displays an option to start a quiz on this specific deck</Text>
        <Text> An option to add a new question to the deck</Text>
      </View>
    )
  }
}

export default DeckInfo
