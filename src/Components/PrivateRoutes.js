import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import authSelectors from '../Redux/auth/auth-selectors'
/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render Redirect to /auth
 */
export default function PrivateRoute({ redirectTo, children, ...routeProps }) {
  const getIsAuthenticated = useSelector(authSelectors.getIsAuthenticated)

  return (
    <Route {...routeProps}>
      {getIsAuthenticated ? children : <Redirect to={redirectTo} />}
    </Route>
  )
}
