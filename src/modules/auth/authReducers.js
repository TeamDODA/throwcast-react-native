import * as types from './constants';

const initialState = {
  pending: null,
  message: null,
  token: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.AUTH_INIT:
      return Object.assign({}, initialState);
    case types.AUTH_PENDING:
      return Object.assign({}, state, {
        pending: true,
        message: 'Attempting to authenticate',
      });
    case types.AUTH_SUCCESS:
      return Object.assign({}, state, {
        pending: null,
        message: null,
        token: action.token,
      });
    case types.AUTH_FAILURE:
      return Object.assign({}, state, {
        pending: null,
        message: action.message,
        token: null,
      });
    default:
      return state;
  }
}
