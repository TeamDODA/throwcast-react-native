import { types } from './';

const initialState = {
  podcastFetching: null,
  playlistFetching: null,
  stationFetching: null,
  message: null,
  podcasts: [],
  stations: [],
  playlists: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_INIT:
      return Object.assign({}, state, {
        podcastFetching: true,
        playlistFetching: true,
        stationFetching: true,
        message: null,
        podcasts: [],
        stations: [],
        playlists: [],
      });
    case types.SEARCH_PODCASTS_SUCC:
      return Object.assign({}, state, {
        podcastFetching: null,
        message: null,
        podcasts: action.list,
      });
    case types.SEARCH_PLAYLISTS_SUCC:
      return Object.assign({}, state, {
        playlistFetching: null,
        message: null,
        playlists: action.list,
      });
    case types.SEARCH_STATIONS_SUCC:
      return Object.assign({}, state, {
        stationFetching: null,
        message: null,
        stations: action.list,
      });
    case types.SEARCH_CLEAR:
      return Object.assign({}, state, {
        podcastFetching: null,
        playlistFetching: null,
        stationFetching: null,
        message: action.message,
        podcasts: [],
        stations: [],
        playlists: [],
      });
    default:
      return state;
  }
}
