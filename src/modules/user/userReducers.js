import * as types from './constants';

const initialState = {
  _id: null,
  username: null,
  provider: null,
  facebook: null,
  playlists: [],
};

export default function (state = initialState, action) {
  let newList;
  switch (action.type) {
    case types.SET_USER:
      return {
        ...initialState,
        ...action.response,
      };
    case types.SET_USER_PLAYLISTS:
      return {
        ...state,
        playlists: action.response || [],
      };
    case types.PLAYLISTS_CREATE_SUCC:
      newList = state.playlists.slice();
      newList.push(action.createdList);
      return {
        ...state,
        playlists: newList,
      };
    case types.PLAYLISTS_DELETE_SUCC:
      newList = state.playlists.slice();
      newList.forEach((list, index) => {
        if (list._id === action.playlistId) {
          newList.splice(index, 1);
        }
      });
      return {
        ...state,
        playlists: newList,
      };
    case types.UNSET_USER:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
