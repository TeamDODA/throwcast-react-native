const initialState = {
  currentPodcast: null,
  podcastList: [],
  playing: true,
  muted: false,
  sliding: false,
  currentTime: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_PLAY":

    default:
      return state;
  }
}
