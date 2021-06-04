import { createReducer } from '@reduxjs/toolkit'
import cardsActions from './cardsActions'

const activeCards = createReducer([], {
  [cardsActions.fetchActiveCardsSuccess]: (_, { payload }) => payload,
})

const doneCards = createReducer([], {
  [cardsActions.fetchDoneCardsSuccess]: (_, { payload }) => payload,
})

const isLoading = createReducer(false, {
  [cardsActions.fetchActiveCardsRequest]: () => true,
  [cardsActions.fetchActiveCardsSuccess]: () => false,
  [cardsActions.fetchActiveCardsError]: () => false,
  [cardsActions.fetchDoneCardsRequest]: () => true,
  [cardsActions.fetchDoneCardsSuccess]: () => false,
  [cardsActions.fetchDoneCardsError]: () => false,
})

const cardsReducers = { activeCards, doneCards, isLoading }
export default cardsReducers
