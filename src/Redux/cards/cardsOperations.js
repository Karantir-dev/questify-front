import axios from 'axios'
import cardsActions from './cardsActions'

axios.defaults.baseURL = 'https://goit23-project.herokuapp.com/'

const fetchActiveCards = () => dispatch => {
  dispatch(cardsActions.fetchActiveCardsRequest())

  axios
    .get('cards?isComplited=false')
    .then(({ data }) => dispatch(cardsActions.fetchActiveCardsSuccess(data)))
    .catch(err =>
      dispatch(
        cardsActions.fetchActiveCardsError(
          err.response?.data?.message || err.message,
        ),
      ),
    )
}

const fetchDoneCards = () => dispatch => {
  dispatch(cardsActions.fetchDoneCardsRequest())

  axios
    .get('cards?isComplited=true')
    .then(({ data }) => dispatch(cardsActions.fetchDoneCardsSuccess(data)))
    .catch(err =>
      dispatch(
        cardsActions.fetchDoneCardsError(
          err.response?.data?.message || err.message,
        ),
      ),
    )
}

const addCard =
  (text, deadline, difficulty, category, isChallenge) => dispatch => {
    const card = {
      text,
      deadline,
      difficulty,
      category,
      isChallenge,
    }

    dispatch(cardsActions.addCardRequest())

    axios
      .post('cards', card)
      .then(({ data }) => dispatch(cardsActions.addCardSuccess(data)))
      .catch(err =>
        dispatch(
          cardsActions.addCardError(err.response?.data?.message || err.message),
        ),
      )
  }

const editCard = (cardId, card) => dispatch => {
  dispatch(cardsActions.editCardRequest())

  axios
    .put(`cards/${cardId}`, card)
    .then(({ data }) => dispatch(cardsActions.editCardSuccess(data)))
    .catch(err =>
      dispatch(
        cardsActions.editCardError(err.response?.data?.message || err.message),
      ),
    )
}

const deleteCard = cardId => dispatch => {
  dispatch(cardsActions.deleteCardRequest())

  axios
    .delete(`cards/${cardId}`)
    .then(() => dispatch(cardsActions.deleteCardSuccess(cardId)))
    .catch(err =>
      dispatch(
        cardsActions.deleteCardError(
          err.response?.data?.message || err.message,
        ),
      ),
    )
}

const cardsOperations = {
  fetchActiveCards,
  fetchDoneCards,
  addCard,
  editCard,
  deleteCard,
}

export default cardsOperations
