import { createReducer } from '@reduxjs/toolkit'
import cardsActions from './cardsActions'

const allCards = createReducer([], {
  [cardsActions.fetchActiveCardsSuccess]: (_, { payload }) => payload,
})

const isLoading = createReducer(false, {
  [cardsActions.fetchActiveCardsRequest]: () => true,
  [cardsActions.fetchActiveCardsSuccess]: () => false,
  [cardsActions.fetchActiveCardsError]: () => false,
  [cardsActions.fetchDoneCardsRequest]: () => true,
  [cardsActions.fetchDoneCardsSuccess]: () => false,
  [cardsActions.fetchDoneCardsError]: () => false,
})

const cardsReducers = { allCards, isLoading }
export default cardsReducers
