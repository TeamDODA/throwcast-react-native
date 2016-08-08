const initialState = {
  token: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusMessage: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SIGNIN_USER_REQUEST':
      return Object.assign({}, state, {
        isAuthenticating: true,
        statusMessage: 'authenticating',
      });
    case 'SIGNIN_USER_SUCCESS':
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: true,
        token: action.token,
        statusMessage: null,
      });
    case 'SIGNIN_USER_FAIL':
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        statusMessage: action.statusMessage,
      });
    default:
      return state;
  }
}
