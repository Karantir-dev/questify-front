import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cardsReducers from './cards/cardsReducers'
import authReducer from './auth/auth-reducer'
import notifReducer from './notifReducers'

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
]

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const store = configureStore({
  reducer: {
    cards: cardsReducers,
    auth: persistReducer(authPersistConfig, authReducer),
    notification: notifReducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore(store)

const entireStore = { store, persistor }
export default entireStore
