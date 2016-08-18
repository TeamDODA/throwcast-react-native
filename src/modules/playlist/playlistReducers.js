import { types } from './';

const initialState = {
  fetching: null,
  message: null,
  list: [],
};

export default function (state = initialState, action) {
  const newList = state.list.slice(0);
  switch (action.type) {
    case types.PLAYLISTS_LOADING_INIT:
      return Object.assign({}, state, {
        fetching: true,
        message: null,
      });
    case types.PLAYLISTS_LOADING_SUCC:
      return Object.assign({}, state, {
        fetching: null,
        message: null,
        list: action.playlists,
      });
    case types.PLAYLISTS_LOADING_FAIL:
      return Object.assign({}, state, {
        fetching: null,
        message: action.message,
        list: [],
      });
    case types.PLAYLISTS_CREATE_INIT:
      return Object.assign({}, state, {
        fetching: true,
        message: null,
      });
    case types.PLAYLISTS_CREATE_SUCC:
      newList.push(action.createdList);
      return Object.assign({}, state, {
        fetching: null,
        message: null,
        list: newList,
      });
    case types.PLAYLISTS_CREATE_FAIL:
      return Object.assign({}, state, {
        fetching: null,
        message: action.message,
      });
    case types.PLAYLISTS_DELETE_INIT:
      return Object.assign({}, state, {
        fetching: null,
        message: null,
        list: null,
      });
    case types.PLAYLISTS_DELETE_SUCC:
      newList.forEach((list, index) => {
        if (list._id === action.playlistId) {
          newList.splice(index, 1);
        }
      });
      return Object.assign({}, state, {
        fetching: null,
        message: null,
        list: newList,
      });
    case types.PLAYLISTS_DELETE_FAIL:
      return Object.assign({}, state, {
        fetching: null,
        message: action.message,
      });
    case types.PLAYLISTS_ADD_INIT:
      return Object.assign({}, state, {
        fetching: true,
        message: null,
      });
    case types.PLAYLISTS_ADD_SUCC:
      newList.forEach(list => {
        if (list._id === action.playlistId) {
          list.podcasts.push(action.podcast);
        }
      });
      return Object.assign({}, state, {
        fetching: null,
        message: null,
        list: newList,
      });
    case types.PLAYLISTS_ADD_FAIL:
      return Object.assign({}, state, {
        fetching: null,
        message: action.message,
      });
    case types.PLAYLISTS_REMOVE_INIT:
      return Object.assign({}, state, {
        fetching: true,
        message: null,
      });
    case types.PLAYLISTS_REMOVE_SUCC:
      newList.forEach((list) => {
        if (list._id === action.playlistId) {
          list.podcasts.forEach((podcast, index) => {
            if (podcast._id === action.podcastId) {
              list.podcasts.splice(index, 1);
            }
          });
        }
      });
      return Object.assign({}, state, {
        fetching: null,
        message: null,
        list: newList,
      });
    case types.PLAYLISTS_REMOVE_FAIL:
      return Object.assign({}, state, {
        fetching: null,
        message: action.message,
      });
    default:
      return state;
  }
}
