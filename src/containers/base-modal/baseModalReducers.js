const initialState = {
  playlistModal: false,
  searchModal: false,
  loadModal: false,
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
    case 'LOAD_MODAL_SHOW':
      return Object.assign({}, state, {
        loadModal: true,
      });
    case 'MODAL_HIDE':
      return Object.assign({}, state, {
        playlistModal: false,
        searchModal: false,
        loadModal: false,
      });
    default:
      return state;
  }
}
