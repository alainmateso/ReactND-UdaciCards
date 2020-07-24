import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, StyleSheet, TextInput } from 'react-native'
import { inputStyle } from '../utils/styles'
import Button from '../components/Button'
import { black, white } from '../utils/colors'
import { connect } from 'react-redux'
import { addCard } from '../actions/card'

export class NewQuestion extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleChangeQuestion = (text) => {
    this.setState(() => ({
      question: text
    }))
  }

  handleChangeAnswer = (text) => {
    this.setState(() => ({
      answer: text
    }))
  }

  handleSubmit = () => {
    const { question, answer } = this.state
    const { route, dispatch } = this.props;

    if (!question && !answer) {
      return alert("Please provide both the question and the answer")
    }
    if (!question) {
      return alert("Please provide the question")
    }
    if (!answer) {
      return alert("Please provide the answer to your question")
    }
    const deckId = this.props.route.params.item

    dispatch(addCard({ question, answer }, deckId))
    this.setState(() => ({
      question: '',
      answer: ''
    }))
    this.props.navigation.goBack();
  }

  render() {
    const { question, answer } = this.state
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          placeholder="What's the question"
          style={inputStyle}
          value={question}
          onChangeText={(text) => this.handleChangeQuestion(text)}
        />
        <TextInput
          placeholder="What's the answer"
          style={inputStyle}
          value={answer}
          onChangeText={(text) => this.handleChangeAnswer(text)}
        />
        <Button
          backgroundColor={black}
          color={white}
          text={'Submit'}
          onPress={this.handleSubmit}
        />
        <Text>
          An option to enter in the question
          An option to enter in the answer
          An option to submit the new question
        </Text>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  }
})

export default connect()(NewQuestion)
