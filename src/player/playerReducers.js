const initialState = {
  currentPodcast: null,
  podcastList: [],
  playing: true,
  muted: false,
  sliding: false,
  duration: null,
  currentTime: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_PLAY':
      return Object.assign({}, state, {
        playing: !state.playing,
      });
    default:
      return state;
  }
}
