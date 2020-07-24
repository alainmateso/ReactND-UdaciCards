import { ADD_CARD } from '../actions/card'

const card = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      const { cardItem, deckId } = action;
      return {
        ...state,
        [deckId]: {
          ...state.deck[deckId],
          questions: state[deckId].questions.push(cardItem)
        }
      }
    default:
      return state
  }
}

export default card;
