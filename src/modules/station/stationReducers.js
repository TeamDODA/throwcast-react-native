import { types } from './';

const initialState = {
  fetching: null,
  message: null,
  list: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.STATIONS_LOADING_INIT:
      return Object.assign({}, state, {
        fetching: true,
        message: null,
      });
    case types.STATIONS_LOADING_SUCC:
      return Object.assign({}, state, {
        fetching: null,
        message: null,
        list: action.stations,
      });
    case types.STATIONS_LOADING_FAIL:
      return Object.assign({}, state, {
        fetching: null,
        message: null,
        list: [],
      });
    default:
      return state;
  }
}
