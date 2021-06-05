import { createReducer } from '@reduxjs/toolkit'
import cardsActions from './cardsActions'

// const allCards = createReducer([], {
//   [cardsActions.fetchActiveCardsSuccess]: (_, { payload }) => payload,
//   [cardsActions.fetchDoneCardsSuccess]: (_, { payload }) => payload,
//   [cardsActions.addCardSuccess]: (state, { payload }) => [...state, payload],
//   [cardsActions.editCardSuccess]: (state, { payload }) => [...state, payload],
//   [cardsActions.deleteCardSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
//   [cardsActions.toggleCompletedSuccess]: (state, { payload }) => state.map(card => (card.id === payload.id ? payload : card)),
//   [cardsActions.toggleChallengeSuccess]: (state, { payload }) => state.map(card => (card.id === payload.id ? payload : card)),
// })

const activeCards = createReducer([], {
  [cardsActions.fetchActiveCardsSuccess]: (_, { payload }) => payload,
  [cardsActions.addCardSuccess]: (state, { payload }) => [...state, payload],
  [cardsActions.editCardSuccess]: (state, { payload }) => [...state, payload],
  [cardsActions.deleteCardSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
  [cardsActions.toggleCompletedSuccess]: (state, { payload }) => state.map(card => (card.id === payload.id ? payload : card)),
  [cardsActions.toggleChallengeSuccess]: (state, { payload }) => state.map(card => (card.id === payload.id ? payload : card)),
})

const doneCards = createReducer([], {
  [cardsActions.fetchDoneCardsSuccess]: (_, { payload }) => payload,
  [cardsActions.addCardSuccess]: (state, { payload }) => [...state, payload],
  [cardsActions.editCardSuccess]: (state, { payload }) => [...state, payload],
  [cardsActions.deleteCardSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
  [cardsActions.toggleCompletedSuccess]: (state, { payload }) => state.map(card => (card.id === payload.id ? payload : card)),
  [cardsActions.toggleChallengeSuccess]: (state, { payload }) => state.map(card => (card.id === payload.id ? payload : card)),
})

const isLoading = createReducer(false, {
  [cardsActions.fetchActiveCardsRequest]: () => true,
  [cardsActions.fetchActiveCardsSuccess]: () => false,
  [cardsActions.fetchActiveCardsError]: () => false,
  [cardsActions.fetchDoneCardsRequest]: () => true,
  [cardsActions.fetchDoneCardsSuccess]: () => false,
  [cardsActions.fetchDoneCardsError]: () => false,
  [cardsActions.addCardRequest]: () => true,
  [cardsActions.addCardSuccess]: () => false,
  [cardsActions.addCardError]: () => false,
  [cardsActions.deleteCardRequest]: () => true,
  [cardsActions.deleteCardSuccess]: () => false,
  [cardsActions.deleteCardError]: () => false,
  [cardsActions.editCardRequest]: () => true,
  [cardsActions.editCardSuccess]: () => false,
  [cardsActions.editCardError]: () => false,
  [cardsActions.toggleCompletedRequest]: () => true,
  [cardsActions.toggleCompletedSuccess]: () => false,
  [cardsActions.toggleCompletedError]: () => false,
  [cardsActions.toggleChallengeRequest]: () => true,
  [cardsActions.toggleChallengeSuccess]: () => false,
  [cardsActions.toggleChallengeError]: () => false,
})

const error = createReducer(null, {
  [cardsActions.fetchActiveCardsError]: (_, { payload }) => payload,
  [cardsActions.fetchDoneCardsError]: (_, { payload }) => payload,
  [cardsActions.addCardError]: (_, { payload }) => payload,
  [cardsActions.deleteCardError]: (_, { payload }) => payload,
  [cardsActions.editCardError]: (_, { payload }) => payload,
  [cardsActions.toggleCompletedError]: (_, { payload }) => payload,
  [cardsActions.toggleChallengeError]: (_, { payload }) => payload,
});

const cardsReducers = {
  // allCards,
  activeCards,
  doneCards,
  isLoading,
  error
}

export default cardsReducers
