import { Actions } from 'react-native-router-flux';
import { types } from './';
import { queueLoadingSucc } from '../../containers/queue/queueActions';
import { BASE_API_URL } from '../../constants';

export function select(podcast) {
  return {
    type: types.SELECT_TO_ADD,
    podcast,
  };
}

export function playlistsLoadingInit() {
  return {
    type: types.PLAYLISTS_LOADING_INIT,
  };
}

export function playlistsLoadingSucc(playlists) {
  return {
    type: types.PLAYLISTS_LOADING_SUCC,
    playlists,
  };
}

export function playlistsLoadingFail(message) {
  return {
    type: types.PLAYLISTS_LOADING_FAIL,
    message,
  };
}

export function playlistsCreateInit() {
  return {
    type: types.PLAYLISTS_CREATE_INIT,
  };
}

export function playlistsCreateSucc(createdList) {
  return {
    type: types.PLAYLISTS_CREATE_SUCC,
    createdList,
  };
}

export function playlistsCreateFail(message) {
  return {
    type: types.PLAYLISTS_CREATE_FAIL,
    message,
  };
}

export function playlistsDeleteInit() {
  return {
    type: types.PLAYLISTS_DELETE_INIT,
  };
}

export function playlistsDeleteSucc(playlistId) {
  return {
    type: types.PLAYLISTS_DELETE_SUCC,
    playlistId,
  };
}

export function playlistsDeleteFail(message) {
  return {
    type: types.PLAYLISTS_DELETE_FAIL,
    message,
  };
}

export function playlistsUpdateInit() {
  return {
    type: types.PLAYLISTS_UPDATE_INIT,
  };
}

export function playlistsUpdateSucc(playlist) {
  return {
    type: types.PLAYLISTS_UPDATE_SUCC,
    playlist,
  };
}

export function playlistsUpdateFail(message) {
  return {
    type: types.PLAYLISTS_UPDATE_FAIL,
    message,
  };
}

export function getPlaylists() {
  return (dispatch, getState) => {
    const { auth } = getState();
    dispatch(playlistsLoadingInit());
    return fetch(`${BASE_API_URL}/api/playlists/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${auth.token}`,
      },
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.message) {
        dispatch(playlistsLoadingFail(response.message));
      } else {
        dispatch(playlistsLoadingSucc(response));
      }
    })
    .catch((e) => {
      dispatch(playlistsLoadingFail(e));
    });
  };
}

export function createPlaylist(playlist) {
  return (dispatch, getState) => {
    const { auth } = getState();
    dispatch(playlistsCreateInit());
    return fetch(`${BASE_API_URL}/api/playlists/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify(playlist),
    })
    .then((response) => response.json())
    .then((response) => {
      playlist._id = response._id; // eslint-disable-line no-param-reassign
      if (response.message) {
        dispatch(playlistsCreateFail(response.message));
      } else {
        dispatch(playlistsCreateSucc(response));
      }
    })
    .catch((e) => {
      dispatch(playlistsCreateFail(e));
    });
  };
}

export function deletePlaylist(playlistId) {
  return (dispatch, getState) => {
    const { auth } = getState();
    return fetch(`${BASE_API_URL}/api/playlists/${playlistId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${auth.token}`,
      },
    })
    .then((response) => {
      if (response.status !== 204) {
        dispatch(playlistsDeleteFail(response.status));
      } else {
        dispatch(playlistsDeleteSucc(playlistId));
        Actions.pop();
      }
    })
    .catch((e) => {
      dispatch(playlistsDeleteFail(e));
    });
  };
}

export function updatePlaylist(playlist, podcast, type) {
  let newPodcasts = playlist.podcasts.slice();
  if (type) {
    newPodcasts.forEach((item, index) => {
      if (item._id === podcast._id) {
        newPodcasts.splice(index, 1);
      }
    });
  } else {
    newPodcasts.push(podcast);
    newPodcasts = newPodcasts.map(e => e._id);
  }
  const update = { ...playlist, podcasts: newPodcasts };
  return (dispatch, getState) => {
    const { auth } = getState();
    dispatch(playlistsUpdateInit());
    if (type) {
      dispatch(queueLoadingSucc(update.podcasts, 'userPlaylists'));
    }
    return fetch(`${BASE_API_URL}/api/playlists/${update._id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify(update),
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.message) {
        dispatch(playlistsUpdateFail(response.message));
      } else {
        dispatch(playlistsUpdateSucc(response));
      }
    })
    .catch((e) => {
      dispatch(playlistsUpdateFail(e));
    });
  };
}
