import React, { Component } from 'react'
import { View, Text } from 'react-native'

export class Quiz extends Component {
  render() {
    return (
      <View>
        <Text>
          displays a card question
          an option to view the answer (flips the card)
          a "Correct" button
          an "Incorrect" button
          the number of cards left in the quiz
          Displays the percentage correct once the quiz is complete

        </Text>
      </View>
    )
  }
}

export default Quiz
