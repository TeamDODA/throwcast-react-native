import { Actions } from 'react-native-router-flux';

export function playlistLoadingInit() {
  return {
    type: 'PLAYLIST_LOADING_INIT',
  };
}

export function playlistLoadingSucc(podcasts) {
  return {
    type: 'PLAYLIST_LOADING_SUCC',
    podcasts,
  };
}

export function playlistLoadingFail(message) {
  return {
    type: 'PLAYLIST_LOADING_FAIL',
    message,
  };
}

export function playlistDetail({ imageUrl, title }) {
  return {
    type: 'PLAYLIST_DETAIL',
    title,
    imageUrl,
  };
}

export function getPlaylist(station) {
  return (dispatch) => {
    dispatch(playlistLoadingInit());
    dispatch(playlistDetail(station));
    return fetch(`http://localhost:8888/api/stations/${station._id}/podcasts/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.message) {
        dispatch(playlistLoadingFail(response.message));
      } else {
        dispatch(playlistLoadingSucc(response.data));
        Actions.playlist();
      }
    })
    .catch((e) => {
      dispatch(playlistLoadingFail(e));
    });
  };
}
