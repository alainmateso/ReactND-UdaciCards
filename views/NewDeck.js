import React, { Component } from 'react'
import { Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { black, white } from '../utils/colors'
import Button from '../components/Button'
import { newDeck } from '../actions/deck'
import { connect } from 'react-redux'
import { inputStyle } from '../utils/styles'

export class NewDeck extends Component {
  state = {
    input: ''
  }

  handleChange = (input) => {
    this.setState(() => ({
      input
    }))
  }

  handleSubmit = async () => {
    const { input } = this.state;
    if (!input) {
      return alert("Please specify the deck's title")
    }
    const { dispatch } = this.props;
    await dispatch(newDeck(input));
    this.setState(() => ({
      input: ''
    }));

    this.props.navigation.navigate("DeckInfo", {
      item: input.replace(' ', ''),
      title: input
    })
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
          style={inputStyle}
          value={input}
          onChangeText={this.handleChange}
        />
        <Button
          backgroundColor={black}
          text={'Create Deck'}
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
    textAlign: 'center',
    marginBottom: 20,
  },
})

export default connect()(NewDeck)
