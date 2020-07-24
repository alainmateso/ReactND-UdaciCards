import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { white, gray } from '../utils/colors'

const Deck = ({ title, questions, onPress }) => {
  const numberOfCards = questions.length
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.cardName}>{title}</Text>
      <Text style={styles.cards}>{numberOfCards === 0 ? 'No cards in this deck!' : `${numberOfCards} cards`}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: white,
    borderRadius: 5,
    margin: 5,
  },
  cardName: {
    fontSize: 30,
  },
  cards: {
    fontSize: 20,
    color: gray,
  }
})

export default Deck
