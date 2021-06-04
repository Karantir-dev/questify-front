import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import authActions from './auth-actions'

const initialState = { name: null, email: null }

const user = createReducer(initialState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.logInSuccess]: (_, { payload }) => payload.user,
  [authActions.logOutSuccess]: () => initialState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
})

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.logInSuccess]: (_, { payload }) => payload.token,
  [authActions.logOutSuccess]: () => null,
})

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.logInSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.logInError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logOutSuccess]: () => false,
})

const isLoading = createReducer(false, {
  [authActions.logInRequest]: () => true,
  [authActions.logInSuccess]: () => false,
  [authActions.logInError]: () => false,
  [authActions.logOutRequest]: () => true,
  [authActions.logOutSuccess]: () => false,
  [authActions.logOutError]: () => false,
})

const setError = (_, { payload }) => payload

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.logInError]: setError,
  [authActions.logOutError]: setError,
  [authActions.getCurrentUserError]: setError,
})

export default combineReducers({
  user,
  token,
  isAuthenticated,
  error,
  isLoading,
})
