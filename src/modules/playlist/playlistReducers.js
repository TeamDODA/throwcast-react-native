import { types } from './';

const initialState = {
  fetching: null,
  message: null,
  podcast: null,
  list: [],
};

export default function (state = initialState, action) {
  const newList = state.list.slice();
  switch (action.type) {
    case types.SELECT_TO_ADD:
      return {
        ...state,
        podcast: action.podcast,
      };
    case types.PLAYLISTS_LOADING_INIT:
      return {
        ...state,
        fetching: true,
        message: null,
      };
    case types.PLAYLISTS_LOADING_SUCC:
      return {
        ...state,
        fetching: null,
        message: null,
        list: action.playlists,
      };
    case types.PLAYLISTS_LOADING_FAIL:
      return {
        ...state,
        fetching: null,
        message: action.message,
        list: [],
      };
    case types.PLAYLISTS_CREATE_INIT:
      return {
        ...state,
        fetching: true,
        message: null,
      };
    case types.PLAYLISTS_CREATE_SUCC:
      newList.push(action.createdList);
      return {
        ...state,
        fetching: null,
        message: null,
        list: newList,
      };
    case types.PLAYLISTS_CREATE_FAIL:
      return {
        ...state,
        fetching: null,
        message: action.message,
      };
    case types.PLAYLISTS_DELETE_INIT:
      return {
        ...state,
        fetching: null,
        message: null,
        list: null,
      };
    case types.PLAYLISTS_DELETE_SUCC:
      newList.forEach((list, index) => {
        if (list._id === action.playlistId) {
          newList.splice(index, 1);
        }
      });
      return {
        ...state,
        fetching: null,
        message: null,
        list: newList,
      };
    case types.PLAYLISTS_DELETE_FAIL:
      return {
        ...state,
        fetching: null,
        message: action.message,
      };
    case types.PLAYLISTS_UPDATE_INIT:
      return {
        ...state,
        fetching: true,
        message: null,
      };
    case types.PLAYLISTS_UPDATE_SUCC:
      newList.forEach((p, i) => {
        if (p._id === action.playlist._id) {
          newList[i] = action.playlist;
        }
      });
      return {
        ...state,
        fetching: null,
        message: null,
        list: newList,
      };
    case types.PLAYLISTS_UPDATE_FAIL:
      return {
        ...state,
        fetching: null,
        message: action.message,
      };
    default:
      return state;
  }
}
