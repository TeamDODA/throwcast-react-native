import { types } from './';

const initialState = {
  username: null,
  password: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.AUTH_FORM_INIT:
      return Object.assign({}, initialState);
    case types.AUTH_FORM_CHANGE:
      return Object.assign({}, state, action.value);
    default:
      return state;
  }
}
