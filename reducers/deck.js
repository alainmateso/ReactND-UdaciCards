import { GET_DECKS, NEW_DECK } from '../actions/deck'
import { ADD_CARD } from '../actions/card'

const deck = (state = {}, action) => {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case NEW_DECK:
      return {
        ...state,
        ...action.deck
      }
    case ADD_CARD:
      const { cardItem, deckId } = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: state[deckId].questions.concat(cardItem)
        }
      }
    default:
      return state
  }
}

export default deck;
