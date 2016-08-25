import { types } from './';

const initialState = {
  fetching: null,
  message: null,
  list: [],
  id: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FAVORITES_LOADING_INIT:
      return Object.assign({}, state, {
        fetching: true,
        message: null,
      });
    case types.FAVORITES_LOADING_SUCC:
      return Object.assign({}, state, {
        fetching: null,
        message: null,
        list: action.response,
      });
    case types.FAVORITES_LOADING_FAIL:
      return Object.assign({}, state, {
        fetching: null,
        message: action.message,
        list: [],
      });
    case types.FAVORITES_ADD_INIT:
      return Object.assign({}, state, {
        fetching: true,
        message: null,
      });
    case types.FAVORITES_ADD_SUCC:
      return Object.assign({}, state, {
        fetching: null,
        message: null,
        list: action.favorites,
      });
    case types.FAVORITES_ADD_FAIL:
      return Object.assign({}, state, {
        fetching: null,
        message: action.message,
      });
    case types.FAVORITES_DELETE_INIT:
      return Object.assign({}, state, {
        fetching: true,
        message: null,
      });
    case types.FAVORITES_DELETE_SUCC:
      return Object.assign({}, state, {
        fetching: null,
        message: null,
        list: action.favorites,
      });
    case types.FAVORITES_DELETE_FAIL:
      return Object.assign({}, state, {
        fetching: null,
        message: action.message,
      });
    default:
      return state;
  }
}
