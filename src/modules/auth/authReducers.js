import * as types from './constants';

const initialState = {
  pending: null,
  message: null,
  token: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.AUTH_INIT:
      return { ...initialState };
    case types.AUTH_PENDING:
      return {
        ...state,
        pending: true,
        message: 'Loading',
      };
    case types.AUTH_SUCCESS:
      return {
        ...state,
        pending: null,
        message: null,
        token: action.token,
      };
    case types.AUTH_FAILURE:
      return {
        ...state,
        pending: null,
        message: action.message,
        token: null,
      };
    default:
      return state;
  }
}
