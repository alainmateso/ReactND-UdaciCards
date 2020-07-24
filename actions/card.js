export const ADD_CARD = "ADD_CARD"
import { addCardToDeck } from '../utils/api'

const addCardAction = (cardItem, deckId) => {
  return {
    type: ADD_CARD,
    cardItem,
    deckId
  }
}

export const addCard = (cardItem, deckId) => async (dispatch) => {
  await addCardToDeck(cardItem, deckId)
  return dispatch(addCardAction(cardItem, deckId))
}