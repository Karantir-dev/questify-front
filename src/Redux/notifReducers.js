import { createReducer } from '@reduxjs/toolkit'

import authActions from './auth/auth-actions'
import cardsActions from './cards/cardsActions'
import resetNotification from './notifAction'

const setNotification = (_, { payload }) => payload

const notifReducer = createReducer(null, {
  [authActions.registerError]: setNotification,
  [authActions.logInError]: setNotification,
  [authActions.logOutError]: setNotification,
  [cardsActions.fetchActiveCardsError]: setNotification,
  [cardsActions.fetchDoneCardsError]: setNotification,
  [cardsActions.deleteCardError]: setNotification,

  [resetNotification]: setNotification,
})

export default notifReducer
