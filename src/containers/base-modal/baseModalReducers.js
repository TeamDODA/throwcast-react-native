const initialState = {
  playlistModal: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'PLAYLIST_MODAL_SHOW':
      return Object.assign({}, state, {
        playlistModal: true,
      });
    case 'PLAYLIST_MODAL_HIDE':
      return Object.assign({}, state, {
        playlistModal: false,
      });
    default:
      return state;
  }
}
