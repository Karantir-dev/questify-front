import { createAction } from '@reduxjs/toolkit'

const fetchActiveCardsRequest = createAction('FETCH_ACTIVE_CARDS_REQUEST')
const fetchActiveCardsSuccess = createAction('FETCH_ACTIVE_CARDS_SUCCESS')
const fetchActiveCardsError = createAction('FETCH_ACTIVE_CARDS_ERROR')

const fetchDoneCardsRequest = createAction('FETCH_DONE_CARDS_REQUEST')
const fetchDoneCardsSuccess = createAction('FETCH_DONE_CARDS_SUCCESS')
const fetchDoneCardsError = createAction('FETCH_DONE_CARDS_ERROR')

const deleteCardRequest = createAction('DELETE_CARD_REQUEST')
const deleteCardSuccess = createAction('DELETE_CARD_SUCCESS')
const deleteCardError = createAction('DELETE_CARD_ERROR')

const cardsActions = {
  fetchActiveCardsRequest,
  fetchActiveCardsSuccess,
  fetchActiveCardsError,
  fetchDoneCardsRequest,
  fetchDoneCardsSuccess,
  fetchDoneCardsError,
  deleteCardRequest,
  deleteCardSuccess,
  deleteCardError,
}
export default cardsActions
