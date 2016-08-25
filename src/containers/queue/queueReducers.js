const initialState = {
  fetching: null,
  message: null,
  _id: null,
  title: null,
  owner: null,
  image: null,
  podcasts: [],
  type: null,
};

export default function (state = initialState, action) {
  const { _id, title, owner, image, podcasts, message } = action;
  switch (action.type) {
    case 'QUEUE_DETAIL':
      return {
        ...state,
        _id,
        title,
        owner,
        image,
        type: action.dataType,
      };
    case 'QUEUE_LOADING_INIT':
      return {
        ...state,
        fetching: true,
        message: null,
      };
    case 'QUEUE_LOADING_SUCC':
      return {
        ...state,
        fetching: null,
        message: null,
        podcasts,
      };
    case 'QUEUE_LOADING_FAIL':
      return {
        ...initialState,
        message,
      };
    default:
      return state;
  }
}
