import { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import ControlBar from './Components/ControlBar'
import { ToastContainer } from "react-toastify"

import s from './App.module.css'

const MainPage = lazy(() =>
  import('./Pages/MainPage/MainPage' /* webpackChunkName: "MainPage"*/),
)
const AuthPage = lazy(() =>
  import('./Pages/AuthPage/AuthPage' /* webpackChunkName: "AuthPage"*/),
)


export default function App() {
  
  return (
    <div>
      {/* <ControlBar /> */}
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/auth" component={AuthPage} />
        </Switch>
      </Suspense>
      <ToastContainer autoClose={5000} position="top-right" type="default"/>
    </div>
  )
}
