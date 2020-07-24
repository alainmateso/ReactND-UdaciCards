import React, { Component } from 'react'
import { View, Text } from 'react-native'

export class NewQuestion extends Component {
  render() {
    return (
      <View>
        <Text>
          An option to enter in the question
          An option to enter in the answer
          An option to submit the new question
        </Text>
      </View>
    )
  }
}

export default NewQuestion
