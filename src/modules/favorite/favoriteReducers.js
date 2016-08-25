import _ from 'lodash';
import { types } from './';

const initialState = {
  fetching: null,
  adding: null,
  deleting: null,
  message: null,
  playlists: [],
  podcasts: [],
  stations: [],
};

export default function (state = initialState, action) {
  const { message, response, removed } = action;
  switch (action.type) {
    case types.FAVORITES_LOADING_INIT:
      return {
        ...state,
        fetching: true,
        message: null,
      };
    case types.FAVORITES_LOADING_SUCC:
      return {
        ...initialState,
        playlists: response.playlists || [],
        podcasts: response.podcasts || [],
        stations: response.stations || [],
      };
    case types.FAVORITES_LOADING_FAIL:
      return {
        ...initialState,
        message,
      };

    case types.FAVORITES_ADD_INIT:
      return {
        ...state,
        adding: true,
      };
    case types.FAVORITES_ADD_FAIL:
      return {
        ...state,
        message,
        adding: null,
      };

    case types.FAVORITES_DELETE_INIT:
      return {
        ...state,
        deleting: true,
      };
    case types.FAVORITES_DELETE_FAIL:
      return {
        ...state,
        message,
        deleting: true,
      };

    case types.FAVORITES_ADD_PLAYLIST_SUCC:
      return {
        ...state,
        adding: null,
        playlists: state.playlists.concat(response),
      };
    case types.FAVORITES_ADD_PODCAST_SUCC:
      return {
        ...state,
        adding: null,
        podcasts: state.podcasts.concat(response),
      };
    case types.FAVORITES_ADD_STATION_SUCC:
      return {
        ...state,
        adding: null,
        stations: state.stations.concat(response),
      };

    case types.FAVORITES_DELETE_PLAYLIST_SUCC:
      return {
        ...state,
        deleting: null,
        playlists: _.without(state.playlists, removed),
      };
    case types.FAVORITES_DELETE_PODCAST_SUCC:
      return {
        ...state,
        deleting: null,
        podcasts: _.without(state.podcasts, removed),
      };
    case types.FAVORITES_DELETE_STATION_SUCC:
      return {
        ...state,
        deleting: null,
        stations: _.without(state.stations, removed),
      };
    default:
      return state;
  }
}
