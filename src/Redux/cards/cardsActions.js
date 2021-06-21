import { createAction } from '@reduxjs/toolkit'

const fetchActiveCardsRequest = createAction('FETCH_ACTIVE_CARDS_REQUEST')
const fetchActiveCardsSuccess = createAction('FETCH_ACTIVE_CARDS_SUCCESS')
const fetchActiveCardsError = createAction('FETCH_ACTIVE_CARDS_ERROR')

const fetchDoneCardsRequest = createAction('FETCH_DONE_CARDS_REQUEST')
const fetchDoneCardsSuccess = createAction('FETCH_DONE_CARDS_SUCCESS')
const fetchDoneCardsError = createAction('FETCH_DONE_CARDS_ERROR')

const addCardRequest = createAction('ADD_CARD_REQUEST')
const addCardSuccess = createAction('ADD_CARD_SUCCESS')
const addCardError = createAction('ADD_CARD_ERROR')

const editCardRequest = createAction('EDIT_CARD_REQUEST')
const editCardSuccess = createAction('EDIT_CARD_SUCCESS')
const editCardError = createAction('EDIT_CARD_ERROR')

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
  addCardRequest,
  addCardSuccess,
  addCardError,
  deleteCardRequest,
  deleteCardSuccess,
  deleteCardError,
  editCardRequest,
  editCardSuccess,
  editCardError,
}
export default cardsActions
