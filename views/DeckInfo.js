import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { deckTitle, cards } from '../utils/styles'
import Button from '../components/Button'
import { white, black } from '../utils/colors'
import { connect } from 'react-redux'

export class DeckInfo extends Component {
  render() {
    console.log('this.props', this.props)
    const { deckId, deckData } = this.props
    const { title, questions } = deckData;
    const numberOfCards = deckData.length;
    return (
      <View style={styles.container}>
        <Text>{this.props.deck}</Text>
        <Text style={deckTitle}>{title}</Text>
        <Text style={cards}>{
          !questions.length
            ? 'No cards in this deck!'
            : (numberOfCards > 1
              ? `${numberOfCards} cards`
              : `${numberOfCards} cards`)
        }</Text>
        <Button
          backgroundColor={white}
          color={black}
          text={'Add Card'}
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          backgroundColor={black}
          color={white}
          text={'Start Quiz'}
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

function mapStateToProps(deck, { route }) {
  const { item } = route.params
  return {
    deckId: item,
    deckData: deck.deck[item]
  }
}

export default connect(mapStateToProps)(DeckInfo)
