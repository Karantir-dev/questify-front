import { createAction } from '@reduxjs/toolkit'

const registerRequest = createAction('REGISTER_REQUEST')
const registerSuccess = createAction('REGISTER_SUCCESS')
const registerError = createAction('REGISTER_ERROR')

const logInRequest = createAction('LOGIN_REQUEST')
const logInSuccess = createAction('LOGIN_SUCCESS')
const logInError = createAction('LOGIN_ERROR')

const logOutRequest = createAction('LOGOUT_REQUEST')
const logOutSuccess = createAction('LOGOUT_SUCCESS')
const logOutError = createAction('LOGOUT_ERROR')

const getCurrentUserRequest = createAction('GET_CURRENT_USER_REQUEST')
const getCurrentUserSuccess = createAction('GET_CURRENT_USER_SUCCESS')
const getCurrentUserError = createAction('GET_CURRENT_USER_ERROR')

const authActions = {
  registerRequest,
  registerSuccess,
  registerError,
  logInRequest,
  logInSuccess,
  logInError,
  logOutRequest,
  logOutSuccess,
  logOutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
}
export default authActions
