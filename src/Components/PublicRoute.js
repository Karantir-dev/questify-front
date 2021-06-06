import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import authSelectors from '../Redux/auth/auth-selectors'
/**
 * - If the route is limited and the user is logged in, render a redirect to /
 * - Otherwise render the component
 */
export default function PublicRoute({ redirectTo, children, ...routeProps }) {
  const getIsAuthenticated = useSelector(authSelectors.getIsAuthenticated)
  return (
    <Route {...routeProps}>
      {getIsAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  )
}
