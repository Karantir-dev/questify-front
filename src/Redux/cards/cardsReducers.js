import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import cardsActions from './cardsActions'

const initialState = [
  {
    id: '123123',
    isChallenge: true,
    difficulty: 'hard',
    category: 'work',
    deadline: '1623585995977',
    text: 'my quest',
    isCompleted: false,
  },
]

const allCards = createReducer(initialState, {
  [cardsActions.fetchActiveCardsSuccess]: (_, { payload }) => payload,
  [cardsActions.fetchDoneCardsSuccess]: (_, { payload }) => payload,
  [cardsActions.addCardSuccess]: (state, { payload }) => [...state, payload],
  [cardsActions.editCardSuccess]: (state, { payload }) => {
    return state.map(card => {
      if (card.id === payload.id) {
        const updatedCard = Object.assign({}, card, payload)
        return updatedCard
      }
      return card
    })
  },
  [cardsActions.deleteCardSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
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
})

const cardsReducers = {
  allCards,
  isLoading,
}

export default combineReducers(cardsReducers)
