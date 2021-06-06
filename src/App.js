import { Suspense, lazy, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

import resetNotification from './Redux/notifAction'
import 'react-toastify/dist/ReactToastify.css'
import s from './App.module.css'

const MainPage = lazy(() =>
  import('./Pages/MainPage/MainPage' /* webpackChunkName: "MainPage"*/),
)
const AuthPage = lazy(() =>
  import('./Pages/AuthPage/AuthPage' /* webpackChunkName: "AuthPage"*/),
)

export default function App() {
  const dispatch = useDispatch()

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
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Switch>
          <Route path="/auth" component={AuthPage} />

          <Route exact path="/" component={MainPage} />
        </Switch>
      </Suspense>

      <ToastContainer className={s.notif} />
    </div>
  )
}
