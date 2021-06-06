const getIsAuthenticated = state => state.auth.isAuthenticated
const getIsLoadding = state => state.auth.isLoading
const getUserName = state => state.auth.user.name
const getUserEmail = state => state.auth.user.email

const authSelectors = {
  getIsAuthenticated,
  getUserName,
  getIsLoadding,
  getUserEmail,
}

export default authSelectors
