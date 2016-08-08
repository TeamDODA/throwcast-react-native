const initialState = {
  isSigningUp: false,
  statusMessage: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SIGNUP_INITIALIZE':
      return Object.assign({}, state, {
        isSigningUp: false,
        statusMessage: null,
      });
    case 'SIGNUP_REQUEST':
      return Object.assign({}, state, {
        isSigningUp: true,
        statusMessage: 'Signing up',
      });
    case 'SIGNUP_SUCCESS':
      return Object.assign({}, state, {
        isSigningUp: false,
        statusMessage: null,
      });
    case 'SIGNUP_FAIL':
      return Object.assign({}, state, {
        isSigningUp: false,
        statusMessage: action.statusMessage,
      });
    default:
      return state;
  }
}
