import { ADD_CARD } from '../actions/card'

const card = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      const { cardItem, deckId } = action;
      const deck = state[deckId]
      return {
        ...state,
        [deck]: {
          ...state[deck],
          questions: state[deck].questions.push(cardItem)
        }
      }
    default:
      return state
  }
}

export default card;
