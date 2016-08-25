import { types } from './';

const initialState = {
  username: null,
  password: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.AUTH_FORM_INIT:
      return {
        ...initialState,
      };
    case types.AUTH_FORM_CHANGE:
      return {
        ...state,
        ...action.value,
      };
    default:
      return state;
  }
}
