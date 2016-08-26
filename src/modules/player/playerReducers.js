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
      return {
        ...state,
        queueId: action.queueId,
        currentIndex: action.currentIndex,
        podcastList: action.podcasts,
        playing: true,
        muted: false,
      };
    case 'TOGGLE_PLAY':
      return {
        ...state,
        playing: !state.playing,
      };
    case 'STOP_PLAY':
      return {
        ...state,
        playing: null,
      };
    case 'NEXT_PODCAST':
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        playing: true,
      };
    case 'PREVIOUS_PODCAST':
      return {
        ...state,
        currentIndex: state.currentIndex - 1,
        playing: true,
      };
    case 'SLIDE':
      return {
        ...state,
        playing: false,
      };
    case 'PLAYER_INIT':
      return { ...initialState };
    default:
      return state;
  }
}
