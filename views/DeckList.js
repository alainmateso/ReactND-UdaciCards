import React, { Component } from 'react'
import { View, Text } from 'react-native'

export class DeckList extends Component {
  render() {
    return (
      <View>
        <Text>Deck List A.K.A default View</Text>
        <Text>Displays the title of each Deck</Text>
        <Text>Displays the number of cards in each deck</Text>
      </View>
    )
  }
}

export default DeckList
