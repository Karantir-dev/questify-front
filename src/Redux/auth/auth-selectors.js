const getIsAuthenticated = state => state.auth.isAuthenticated
const getIsLoadding = state => state.auth.isLoading
const getUserName = state => state.auth.user

const authSelectors = {
  getIsAuthenticated,
  getUserName,
  getIsLoadding,
}

export default authSelectors
