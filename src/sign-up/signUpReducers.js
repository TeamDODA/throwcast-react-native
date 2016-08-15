const initialState = {
  isSigningUp: false,
  statusMessage: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SIGN_UP_INITIALIZE':
      return Object.assign({}, state, {
        isSigningUp: false,
        statusMessage: null,
      });
    case 'SIGN_UP_REQUEST':
      return Object.assign({}, state, {
        isSigningUp: true,
        statusMessage: 'Signing up',
      });
    case 'SIGN_UP_SUCCESS':
      return Object.assign({}, state, {
        isSigningUp: false,
        statusMessage: null,
      });
    case 'SIGN_UP_FAIL':
      return Object.assign({}, state, {
        isSigningUp: false,
        statusMessage: action.statusMessage,
      });
    default:
      return state;
  }
}
