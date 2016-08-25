import _ from 'lodash';
import { types } from './';

const initialState = {
  pending: null,
  message: null,
  playlists: [],
  podcasts: [],
  stations: [],
};

export default function (state = initialState, action) {
  const { message, response, removed } = action;
  switch (action.type) {
    case types.FAVORITES_PENDING_TRUE:
      return {
        ...state,
        pending: true,
      };
    case types.FAVORITES_PENDING_FALSE:
      return {
        ...state,
        pending: null,
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

    case types.FAVORITES_ADD_FAIL:
      return {
        ...state,
        message,
      };
    case types.FAVORITES_DELETE_FAIL:
      return {
        ...state,
        message,
      };

    case types.FAVORITES_ADD_PLAYLIST_SUCC:
      return {
        ...state,
        playlists: state.playlists.concat(response),
      };
    case types.FAVORITES_ADD_PODCAST_SUCC:
      return {
        ...state,
        podcasts: state.podcasts.concat(response),
      };
    case types.FAVORITES_ADD_STATION_SUCC:
      return {
        ...state,
        stations: state.stations.concat(response),
      };

    case types.FAVORITES_DELETE_PLAYLIST_SUCC:
      return {
        ...state,
        playlists: _.without(state.playlists, removed),
      };
    case types.FAVORITES_DELETE_PODCAST_SUCC:
      return {
        ...state,
        podcasts: _.without(state.podcasts, removed),
      };
    case types.FAVORITES_DELETE_STATION_SUCC:
      return {
        ...state,
        stations: _.without(state.stations, removed),
      };
    default:
      return state;
  }
}
