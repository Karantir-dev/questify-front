import MainPage from '../Pages/MainPage/MainPage'
import AuthPage from '../Pages/AuthPage/AuthPage';
import { useSelector } from 'react-redux';
import authSelectors from '../Redux/auth/auth-selectors';

export default function AppBar() {

  const isLogedIn = useSelector(authSelectors.getIsAuthenticated);

   return (
    <>
      {isLogedIn ? <MainPage /> : <AuthPage />}
    </>
   )
}