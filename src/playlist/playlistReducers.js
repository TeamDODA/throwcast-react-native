const initialState = {
  fetching: null,
  message: null,
  title: null,
  imageUrl: null,
  list: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'PLAYLIST_DETAIL':
      return Object.assign({}, state, {
        title: action.title,
        imageUrl: action.imageUrl,
      });
    case 'PLAYLIST_LOADING_INIT':
      return Object.assign({}, state, {
        fetching: true,
        message: null,
      });
    case 'PLAYLIST_LOADING_SUCC':
      return Object.assign({}, state, {
        fetching: null,
        message: null,
        list: action.podcasts,
      });
    case 'PLAYLIST_LOADING_FAIL':
      return Object.assign({}, state, {
        fetching: null,
        message: null,
        list: [],
      });
    default:
      return state;
  }
}
