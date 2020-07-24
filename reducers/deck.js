import { GET_DECKS, NEW_DECK } from '../actions/deck'

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
    default:
      return state
  }
}

export default deck;
