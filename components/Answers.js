import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { red, green, white, black } from '../utils/colors';
import Button from './Button';

const Answers = ({
  questions,
  handleIncorrect,
  handleCorrect,
  currentQuestion
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.answer}>{questions[currentQuestion].answer}</Text>
      <View>
        <Button backgroundColor={green} color={white} text={"Correct"} onPress={handleCorrect} />
        <Button backgroundColor={red} color={white} text={"Incorrect"} onPress={handleIncorrect} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
  answer: {
    color: green,
    fontSize: 40,
    marginBottom: 50,
  },
});

export default Answers;
