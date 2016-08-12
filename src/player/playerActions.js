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
export function setDuration(duration) {
  return {
    type: 'SET_DURATION',
    duration,
  };
}

export function nextPodcast() {
  return {
    type: 'NEXT_PODCAST',
  };
}

export function previousPodcast() {
  return {
    type: 'PREVIOUS_PODCAST',
  };
}

export function setCurrentTime(currentTime) {
  return {
    type: 'SET_CURRENT_TIME',
    currentTime,
  };
}

export function slide() {
  return {
    type: 'SLIDE',
  };
}

export function onLoad({ duration }) {
  return (dispatch) => {
    dispatch(setDuration(duration));
  };
}

export function onProgress({ currentTime }) {
  return (dispatch) => {
    dispatch(setCurrentTime(currentTime));
  };
}

export function onEnd(index, length) {
  return (dispatch) => {
    if (index < length - 1) {
      dispatch(nextPodcast());
    } else {
      dispatch(togglePlay());
    }
  };
}
