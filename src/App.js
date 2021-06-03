import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import s from './App.module.css';

const MainPage = lazy(() =>
  import('./Pages/MainPage/MainPage' /* webpackChunkName: "MainPage"*/),
);
const AuthPage = lazy(() =>
  import('./Pages/AuthPage/AuthPage' /* webpackChunkName: "AuthPage"*/),
);

export default function App() {
  return (
    <div className={s.container}>
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Switch>
          <Route path="/auth" component={AuthPage} />

          <Route exact path="/" component={MainPage} />
        </Switch>
      </Suspense>
    </div>
  );
}
