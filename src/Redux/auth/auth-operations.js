import axios from 'axios';

import authActions from './auth-actions';

// axios.defaults.baseURL = '';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// const register = credentials => dispatch => {
//   dispatch(authActions.registerRequest());

//   axios
//     .post('users/signup', credentials)
//     .then(response => {
//       token.set(response.data.token);
//       dispatch(authActions.registerSuccess(response.data));
//     })
//     .catch(err => {
//       dispatch(authActions.registerError(err.message));
//     });
// };

// const login = credentials => dispatch => {
//   dispatch(authActions.logInRequest());

//   axios
//     .post('users/login', credentials)
//     .then(response => {
//       token.set(response.data.token);
//       dispatch(authActions.logInSuccess(response.data));
//     })
//     .catch(err => {
//       dispatch(authActions.logInError(err.message));
//     });
// };

// const logout = () => dispatch => {
//   dispatch(authActions.logOutRequest());

//   axios
//     .post('users/logout')
//     .then(() => {
//       token.unset();

//       dispatch(authActions.logOutSuccess());
//     })
//     .catch(err => {
//       dispatch(authActions.logOutError(err.message));
//     });
// };

// const getCurrentUser = () => (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();

//   if (!persistedToken) {
//     return;
//   }

//   token.set(persistedToken);
//   dispatch(authActions.getCurrentUserRequest());

//   axios
//     .get('/users/current')
//     .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
//     .catch(err => dispatch(authActions.getCurrentUserError(err.message)));
// };

// const authOperations = { register, login, logout, getCurrentUser };
// export default authOperations;
