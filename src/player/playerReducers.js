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
    case 'SET_DURATION':
      return Object.assign({}, state, {
        duration: action.duration,
      });
    case 'SET_CURRENT_TIME':
      return Object.assign({}, state, {
        currentTime: action.currentTime,
      });
    default:
      return state;
  }
}
