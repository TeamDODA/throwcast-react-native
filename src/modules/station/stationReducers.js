import { types } from './';

const initialState = {
  fetching: null,
  message: null,
  list: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.STATIONS_LOADING_INIT:
      return {
        ...state,
        fetching: true,
        message: null,
      };
    case types.STATIONS_LOADING_SUCC:
      return {
        ...state,
        fetching: null,
        message: null,
        list: action.stations,
      };
    case types.STATIONS_LOADING_FAIL:
      return {
        fetching: null,
        message: null,
        list: [],
      };
    default:
      return state;
  }
}
