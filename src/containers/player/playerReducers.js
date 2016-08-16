const initialState = {
  currentIndex: 0,
  podcastList: [{
    title: null,
    description: null,
    imageUrl: null,
    link: 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab',
  }],
  playing: false,
  muted: false,
  sliding: false,
  duration: 0,
  currentTime: 0,
  audio: null,
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
    case 'SET_AUDIO_REF':
      return Object.assign({}, state, {
        audio: action.audio,
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
    case 'SLIDE':
      return Object.assign({}, state, {
        playing: false,
      });
    default:
      return state;
  }
}
