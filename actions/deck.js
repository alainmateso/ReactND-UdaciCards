import { getDecks, saveDeckTitle } from '../utils/api'

export const GET_DECKS = 'GET_DECKS'
export const NEW_DECK = 'NEW_DECK'

const getDecksAction = (decks) => {
  return {
    type: GET_DECKS,
    decks
  }
}

function newDeckAction(deck) {
  return {
    type: NEW_DECK,
    deck
  }
}


export const fetchDecks = () => async dispatch => {
  const results = await getDecks();
  return dispatch(getDecksAction(results));
}

export const newDeck = (title) => async (dispatch) => {
  const deck = await saveDeckTitle(title)
  return dispatch(newDeckAction(deck))
}