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

const toggleCompletedRequest = createAction('TOGGLE_COMPLETED_REQUEST')
const toggleCompletedSuccess = createAction('TOGGLE_COMPLETED_SUCCESS')
const toggleCompletedError = createAction('TOGGLE_COMPLETED_ERROR')

const toggleChallengeRequest = createAction('TOGGLE_CHALLENGE_REQUEST')
const toggleChallengeSuccess = createAction('TOGGLE_CHALLENGE_SUCCESS')
const toggleChallengeError = createAction('TOGGLE_CHALLENGE_ERROR')

const cardsActions = {
  fetchActiveCardsRequest, fetchActiveCardsSuccess, fetchActiveCardsError,
  fetchDoneCardsRequest, fetchDoneCardsSuccess, fetchDoneCardsError,
  addCardRequest, addCardSuccess, addCardError,
  deleteCardRequest, deleteCardSuccess, deleteCardError,
  editCardRequest, editCardSuccess, editCardError,
  toggleCompletedRequest, toggleCompletedSuccess, toggleCompletedError,
  toggleChallengeRequest, toggleChallengeSuccess, toggleChallengeError
}
export default cardsActions
