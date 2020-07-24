import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { black, white, green } from '../utils/colors';
import Button from './Button';

const Score = ({ correct, questions, restart, goBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.score}>Your score:</Text>
      <Text style={styles.details}>{`You got ${correct} correct answers from a total of ${
        questions.length
        } questions.`}</Text>
      <Text style={styles.details}>{`That rounds up to that rounds to (${Math.floor(
        (correct / questions.length) * 100
      )}%)`}</Text>

      <Button backgroundColor={green} onPress={restart} text={'Retake the Quiz'} color={white} />
      <Button backgroundColor={black} onPress={goBack} text={'Go back to Deck'} color={white} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  score: {
    fontSize: 30,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 25,
    marginBottom: 50,
    textAlign: "center",
  }
});

export default Score;
