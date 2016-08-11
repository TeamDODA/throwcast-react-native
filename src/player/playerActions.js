import { Actions } from 'react-native-router-flux';

export function select(currentPodcast, podcastList, currentIndex) {
  return {
    type: 'SELECT_PODCAST',
    currentPodcast,
    podcastList,
    currentIndex,
  };
}

export function selectPodcast(podcast, playlist, index) {
  return (dispatch) => {
    dispatch(select(podcast, playlist, index));
    Actions.player();
  };
}

export function togglePlay() {
  return {
    type: 'TOGGLE_PLAY',
  };
}
