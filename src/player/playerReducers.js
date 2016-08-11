const initialState = {
  currentPodcast: null,
  currentIndex: null,
  podcastList: [],
  playing: true,
  muted: false,
  sliding: false,
  duration: 0,
  currentTime: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SELECT_PODCAST':
      return Object.assign({}, state, {
        currentPodcast: action.currentPodcast,
        currentIndex: action.currentIndex,
        podcastList: action.podcastList,
        playing: true,
        muted: false,
        sliding: false,
        duration: 0,
        currentTime: 0,
      });
    case 'TOGGLE_PLAY':
      return Object.assign({}, state, {
        playing: !state.playing,
      });
    default:
      return state;
  }
}
