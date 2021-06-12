import { Suspense, lazy, useEffect } from 'react'
import { Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

import resetNotification from './Redux/notifAction'
import PrivateRoute from './Components/PrivateRoutes'
import PublicRoute from './Components/PublicRoute'
import authOperations from './Redux/auth/auth-operations'

import Loader from './Components/Loader/Loader'

import 'react-toastify/dist/ReactToastify.css'
import s from './App.module.css'

const MainPage = lazy(() =>
  import('./Pages/MainPage/MainPage' /* webpackChunkName: "MainPage"*/),
)
const AuthPage = lazy(() =>
  import('./Pages/AuthPage/AuthPage' /* webpackChunkName: "AuthPage"*/),
)
const VerificationPage = lazy(() =>
  import(
    './Pages/VerificationPage/VerificationPage' /* webpackChunkName: "VerificationPage"*/
  ),
)

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch])

  const notification = useSelector(state => state.notification)
  if (notification !== null) {
    setTimeout(() => {
      dispatch(resetNotification(null))
    }, 5000)
  }

  useEffect(() => {
    toast.warn(notification)
  }, [notification])

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Switch>
          <PrivateRoute exact path="/" redirectTo="/auth">
            <MainPage />
          </PrivateRoute>

          <PublicRoute exact path="/auth" restricted redirectTo="/">
            <AuthPage />
          </PublicRoute>

          <PublicRoute path="/auth/:verifyToken" restricted redirectTo="/">
            <VerificationPage />
          </PublicRoute>
        </Switch>
      </Suspense>

      <ToastContainer className={s.notif} />
    </div>
  )
}
