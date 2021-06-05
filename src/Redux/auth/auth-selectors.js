const getIsAuthenticated = state => state.auth.isAuthenticated;
const getIsLoadding = state => state.auth.isLoading;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getError = state => state.auth.error;
const getToken = state => state.auth.token;

const authSelectors = {
    getIsAuthenticated,
    getUserName,
    getIsLoadding,
    getUserEmail,
    getError,
    getToken,
};


export default authSelectors;
