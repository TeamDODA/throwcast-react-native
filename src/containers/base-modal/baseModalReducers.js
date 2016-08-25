const initialState = {
  playlistModal: false,
  searchModal: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'PLAYLIST_MODAL_SHOW':
      return Object.assign({}, state, {
        playlistModal: true,
      });
    case 'SEARCH_MODAL_SHOW':
      return Object.assign({}, state, {
        searchModal: true,
      });
    case 'MODAL_HIDE':
      return Object.assign({}, state, {
        playlistModal: false,
        searchModal: false,
      });
    default:
      return state;
  }
}
