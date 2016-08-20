import { types } from './';

const initialState = {
  fetching: null,
  message: null,
  list: [],
  id: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SUBSCRIPTIONS_LOADING_INIT:
      return Object.assign({}, state, {
        fetching: true,
        message: null,
      });
    case types.SUBSCRIPTIONS_LOADING_SUCC:
      return Object.assign({}, state, {
        fetching: null,
        message: null,
        list: action.subscriptions || [],
        id: action.userId,
      });
    case types.SUBSCRIPTIONS_LOADING_FAIL:
      return Object.assign({}, state, {
        fetching: null,
        message: action.message,
        list: [],
      });
    case types.SUBSCRIPTIONS_UPDATE_INIT:
      return Object.assign({}, state, {
        fetching: true,
        message: null,
      });
    case types.SUBSCRIPTIONS_UPDATE_SUCC:
      return Object.assign({}, state, {
        fetching: null,
        message: null,
        list: action.subscriptions,
      });
    case types.SUBSCRIPTIONS_UPDATE_FAIL:
      return Object.assign({}, state, {
        fetching: null,
        message: action.message,
      });
    default:
      return state;
  }
}
