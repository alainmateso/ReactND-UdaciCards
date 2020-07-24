import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { white, gray } from '../utils/colors'
import { deckTitle, cards } from '../utils/styles'

const Deck = ({ title, questions, onPress }) => {
  const numberOfCards = questions.length
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={deckTitle}>{title}</Text>
      <Text style={cards}>
        {!numberOfCards
          ? 'No cards in this deck!'
          : numberOfCards > 1
            ? `${numberOfCards} cards`
            : `${numberOfCards} card`}
      </Text>
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
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
  },
})

export default Deck
