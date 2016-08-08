const initialState = {
  token: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusMessage: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER_REQUEST':
      return Object.assign({}, state, {
        isAuthenticating: true,
        statusMessage: 'authenticating',
      });
    default:
      return state;
  }
}
