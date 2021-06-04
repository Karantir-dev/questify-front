import axios from 'axios';
import cardsActions from './cardsActions';

axios.defaults.baseURL = 'https://goit23-project.herokuapp.com/';

const fetchActiveCards = () => dispatch => {
  dispatch(cardsActions.fetchActiveCardsRequest());

  //   axios
  //     .get('cards/', { complited: false })
  //     .then(({ data }) => {
  //       dispatch(cardsActions.fetchActiveCardsSuccess(data));
  //     })
  //     .catch(err =>
  //       dispatch(
  //         cardsActions.fetchActiveCardsError(
  //           err.response?.data?.message || err.message,
  //         ),
  //       ),
  //     );
};

const fetchDoneCards = () => dispatch => {
  dispatch(cardsActions.fetchDoneCardsRequest());

  //   axios
  //     .get('cards/', { complited: true })
  //     .then(({ data }) => {
  //       dispatch(cardsActions.fetchDoneCardsSuccess(data));
  //     })
  //     .catch(err =>
  //       dispatch(
  //         cardsActions.fetchDoneCardsError(
  //           err.response?.data?.message || err.message,
  //         ),
  //       ),
  //     );
};

const deleteCard = cardId => dispatch => {
    dispatch(cardsActions.deleteCardRequest());

    axios
        .delete(`/cards/${cardId}`)
        .then(() => dispatch(cardsActions.deleteCardSuccess(cardId)))
        .catch(error => dispatch(cardsActions.deleteCardError(error.message)));
};

const cardsOperations = { fetchActiveCards, fetchDoneCards, deleteCard };
export default cardsOperations;
