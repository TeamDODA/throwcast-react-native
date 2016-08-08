const initialState = {
  isSigningUp: false,
  statusMessage: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SIGNUP_USER_REQUEST':
      return Object.assign({}, state, {
        isSigningUp: true,
        statusMessage: 'Signing up',
      });
    case 'SIGNUP_USER_SUCCESS':
      return Object.assign({}, state, {
        isSigningUp: false,
        statusMessage: null,
      });
    case 'SIGNUP_USER_FAIL':
      return Object.assign({}, state, {
        isSigningUp: false,
        statusMessage: action.statusMessage,
      });
    default:
      return state;
  }
}
