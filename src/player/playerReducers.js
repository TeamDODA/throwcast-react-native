const initialState = {
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
    case 'SET_DURATION':
      return Object.assign({}, state, {
        duration: action.duration,
      });
    case 'SET_CURRENT_TIME':
      return Object.assign({}, state, {
        currentTime: action.currentTime,
      });
    case 'TOGGLE_PLAY':
      return Object.assign({}, state, {
        playing: !state.playing,
      });
    case 'NEXT_PODCAST':
      return Object.assign({}, state, {
        currentIndex: state.currentIndex + 1,
        currentTime: 0,
        duration: 0,
      });
    case 'PREVIOUS_PODCAST':
      return Object.assign({}, state, {
        currentIndex: state.currentIndex - 1,
        currentTime: 0,
        duration: 0,
      });
    default:
      return state;
  }
}
