import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Answers from '../components/Answers'
import Score from '../components/Score'
import { red, green } from '../utils/colors'

export class Quiz extends Component {
  state = {
    correct: 0,
    currentQuestion: 0,
    showAnswer: false
  };

  handleShowAnswer = () => {
    this.setState(() => ({
      showAnswer: true
    }));
  };

  handleIncorrect = () => {
    this.setState(prevState => ({
      currentQuestion: prevState.currentQuestion + 1,
      showAnswer: false
    }));
  };

  handleCorrect = () => {
    this.setState(prevState => ({
      currentQuestion: prevState.currentQuestion + 1,
      correct: prevState.correct + 1,
      showAnswer: false
    }));
  };

  handleReset = () => {
    this.setState(() => ({
      correct: 0,
      currentQuestion: 0,
      showAnswer: false
    }));
  };

  render() {
    const { questions, navigation } = this.props;
    if (!questions.length) {
      return (
        <View>
          <Text style={styles.noQuestions}>
            OOops! Looks like the deck is empty! Add questions first
          </Text>
        </View>
      );
    }

    const { currentQuestion, correct, showAnswer } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.questionCounter}>
          {`${
            currentQuestion !== questions.length
              ? currentQuestion + 1
              : currentQuestion
            } / ${questions.length}`}
        </Text>
        {
          currentQuestion === questions.length ? (
            <Score
              correct={correct}
              questions={questions}
              restart={this.handleReset}
              goBack={() => {
                navigation.goBack();
              }}
            />
          ) : (
              <View>
                <View style={styles.center}>
                  <Text style={styles.questionTitle}>{questions[currentQuestion].question}</Text>
                </View>
                <View style={styles.center}>
                  {!showAnswer ? (
                    <Text style={styles.flip} onPress={this.handleShowAnswer}>Show me the prompt!</Text>
                  ) : (
                      <Answers
                        questions={questions}
                        currentQuestion={currentQuestion}
                        handleCorrect={this.handleCorrect}
                        handleIncorrect={this.handleIncorrect}
                      />
                    )}
                </View>
              </View>
            )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start",
  },
  questionCounter: {
    fontSize: 30,
    fontWeight: "bold"
  },
  noQuestions: {
    fontSize: 30,
    textAlign: "center",
    color: red,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  questionTitle: {
    fontSize: 100,
    marginTop: 50,
    marginBottom: 50,
  },
  flip: {
    fontSize: 30,
    color: green,
    marginTop: 100,
  },
  buttons: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  }
})

const mapStateToProps = (state, { route }) => {
  const { item } = route.params;
  const data = state.deck[item];
  return {
    questions: data.questions
  };
};

export default connect(mapStateToProps)(Quiz)
