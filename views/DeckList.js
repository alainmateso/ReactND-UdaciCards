import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Deck from '../components/Deck'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions/deck'
import { red } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'

export class DeckList extends Component {
  componentDidMount() {
    const { getAllDecks } = this.props;
    getAllDecks();
  }

  renderItem = ({ item }) => {
    const { allDecks } = this.props
    const { title, questions } = allDecks[item]
    return (
      <Deck
        title={title}
        questions={questions}
        onPress={() => this.props.navigation.navigate('DeckInfo', { item, title })}
      />
    )
  }
  render() {
    const { allDecks } = this.props;
    if (!Object.keys(allDecks).length) {
      return (
        <View style={styles.container}>
          <FontAwesome name="frown-o" size={100} color="black" />
          <Text style={styles.noCards}>You haven't created any decks yet!</Text>
        </View>
      )
    }
    return (
      <FlatList
        data={Object.keys(allDecks)}
        renderItem={this.renderItem}
        keyExtractor={item => item}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  noCards: {
    // flex: 1,
    fontSize: 25,
    color: red,
  }
})

function mapStateToProps(decks) {
  return {
    allDecks: decks.deck
  }
}

const mapDispatchToProps = dispatch => ({
  getAllDecks: () => dispatch(fetchDecks())
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
