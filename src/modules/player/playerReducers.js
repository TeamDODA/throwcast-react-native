const initialState = {
  queueId: null,
  currentIndex: 0,
  podcastList: [{
    title: null,
    description: null,
    image: null,
    enclosure: { url: 'http://' },
  }],
  playing: false,
  muted: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SELECT_PODCAST':
      return Object.assign({}, state, {
        queueId: action.queueId,
        currentIndex: action.currentIndex,
        podcastList: action.podcasts,
        playing: true,
        muted: false,
      });
    case 'TOGGLE_PLAY':
      return Object.assign({}, state, {
        playing: !state.playing,
      });
    case 'NEXT_PODCAST':
      return Object.assign({}, state, {
        currentIndex: state.currentIndex + 1,
      });
    case 'PREVIOUS_PODCAST':
      return Object.assign({}, state, {
        currentIndex: state.currentIndex - 1,
      });
    case 'SLIDE':
      return Object.assign({}, state, {
        playing: false,
      });
    default:
      return state;
  }
}
