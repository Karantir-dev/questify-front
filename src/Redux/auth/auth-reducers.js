import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import authActions from './auth-actions'

const initialState = { name: null, email: null }

const user = createReducer(initialState, {
  [authActions.logInSuccess]: (_, { payload }) => payload.user,
  [authActions.logOutSuccess]: () => initialState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
})

const token = createReducer(null, {
  [authActions.logInSuccess]: (_, { payload }) => payload,
  [authActions.logOutSuccess]: () => null,
})

const isAuthenticated = createReducer(false, {
  [authActions.logInSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.logInError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logOutSuccess]: () => false,
})

const isLoading = createReducer(false, {
  [authActions.registerSuccess]: () => false,
  [authActions.registerRequest]: () => true,
  [authActions.registerError]: () => false,
  [authActions.logInRequest]: () => true,
  [authActions.logInSuccess]: () => false,
  [authActions.logInError]: () => false,
  [authActions.logOutRequest]: () => true,
  [authActions.logOutSuccess]: () => false,
  [authActions.logOutError]: () => false,
  [authActions.getCurrentUserRequest]: () => true,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,
})

export default combineReducers({
  user,
  token,
  isAuthenticated,
  isLoading,
})
