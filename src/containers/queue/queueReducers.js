const initialState = {
  fetching: null,
  message: null,
  _id: null,
  title: null,
  imageUrl: null,
  podcasts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'QUEUE_DETAIL':
      return Object.assign({}, state, {
        _id: action._id,
        title: action.title,
        imageUrl: action.imageUrl,
      });
    case 'QUEUE_LOADING_INIT':
      return Object.assign({}, state, {
        fetching: true,
        message: null,
      });
    case 'QUEUE_LOADING_SUCC':
      return Object.assign({}, state, {
        fetching: null,
        message: null,
        podcasts: action.podcasts,
      });
    case 'QUEUE_LOADING_FAIL':
      return Object.assign({}, state, {
        fetching: null,
        message: null,
        podcasts: [],
      });
    default:
      return state;
  }
}
