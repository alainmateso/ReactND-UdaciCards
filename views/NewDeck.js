import React, { Component } from 'react'
import { KeyboardAvoidingKeyboardAvoidingView, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { black, white } from '../utils/colors'
import Button from '../components/Button'
import { newDeck } from '../actions/deck'
import { connect } from 'react-redux'

export class NewDeck extends Component {
  state = {
    input: ''
  }

  handleChange = (input) => {
    this.setState(() => ({
      input
    }))
  }

  handleSubmit = () => {
    const { input } = this.state;
    const { dispatch } = this.props;
    dispatch(newDeck(input));
    this.setState(() => ({
      input: ''
    }));
  }

  render() {
    const { input } = this.state
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.constainer}>
        <Text style={styles.title}>
          What is the title of your deck?
        </Text>
        <TextInput
          placeholder="Deck title"
          style={[styles.input]}
          value={input}
          onChangeText={this.handleChange}
        />
        <Button
          backgroundColor={black}
          text={'SUBMIT'}
          color={white}
          onPress={this.handleSubmit}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 50,
    textAlign: 'center'
  },
  input: {
    borderRadius: 5,
    width: 300,
    padding: 10,
    fontSize: 20,
    borderColor: black,
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 10
  },
})

export default connect()(NewDeck)
