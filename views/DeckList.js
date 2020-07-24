import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Deck from '../components/Deck'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions/deck'
import { green } from '../utils/colors'

export class DeckList extends Component {
  componentDidMount() {
    const { getAllDecks } = this.props;
    getAllDecks();
  }

  renderItem = ({ item }) => {
    const { allDecks } = this.props
    const { title, questions } = allDecks[item]
    return (
      <Deck title={title} questions={questions} />
    )
  }
  render() {
    const { allDecks } = this.props;
    console.log('What decks do we have ', this.props)
    if (!Object.keys(allDecks).length) {
      return (
        <View style={styles.container}>
          <Text style={styles.noCards}>
            No Decks in here yet!
          </Text>
        </View>
      )
    }
    return (
      <FlatList
        data={Object.keys(allDecks)}
        renderItem={this.renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  noCards: {
    fontSize: 25,
    color: green
  }
})

// const mapStateToProps = decks => ({
//   decks: JSON.parse(JSON.stringify(decks))
// });

function mapStateToProps(decks) {
  return {
    allDecks: decks.deck
  }
}

const mapDispatchToProps = dispatch => ({
  getAllDecks: () => dispatch(fetchDecks())
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
