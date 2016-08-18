import { types } from './';

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

export function playlistsAddInit() {
  return {
    type: types.PLAYLISTS_ADD_INIT,
  };
}

export function playlistsAddSucc(playlistId, podcast) {
  return {
    type: types.PLAYLISTS_ADD_SUCC,
    playlistId,
    podcast,
  };
}

export function playlistsAddFail(message) {
  return {
    type: types.PLAYLISTS_ADD_FAIL,
    message,
  };
}

export function playlistsRemoveInit() {
  return {
    type: types.PLAYLISTS_REMOVE_INIT,
  };
}

export function playlistsRemoveSucc(playlistId, podcastId) {
  return {
    type: types.PLAYLISTS_REMOVE_SUCC,
    playlistId,
    podcastId,
  };
}

export function playlistsRemoveFail(message) {
  return {
    type: types.PLAYLISTS_REMOVE_FAIL,
    message,
  };
}

export function getPlaylists() {
  return (dispatch) => {
    dispatch(playlistsLoadingInit());
    return fetch('http://localhost:8888/api/playlists', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.message) {
        dispatch(playlistsLoadingFail(response.message));
      } else {
        dispatch(playlistsLoadingSucc(response.data));
      }
    })
    .catch((e) => {
      dispatch(playlistsLoadingFail(e));
    });
  };
}

export function createPlaylist(playlist) {
  return (dispatch) => {
    dispatch(playlistsCreateInit());
    return fetch('http://localhost:8888/api/playlists', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: playlist,
    })
    .then((response) => response.json())
    .then((response) => {
      playlist._id = response.data._id; // eslint-disable-line no-param-reassign
      if (response.message) {
        dispatch(playlistsCreateFail(response.message));
      } else {
        dispatch(playlistsCreateSucc(playlist));
      }
    })
    .catch((e) => {
      dispatch(playlistsCreateFail(e));
    });
  };
}

export function deletePlaylist(playlistId) {
  return (dispatch) => {
    dispatch(playlistsDeleteInit());
    return fetch(`http://localhost:8888/api/playlists/${playlistId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.message) {
        dispatch(playlistsDeleteFail(response.message));
      } else {
        dispatch(playlistsDeleteSucc(playlistId));
      }
    })
    .catch((e) => {
      dispatch(playlistsDeleteFail(e));
    });
  };
}

export function addToPlaylist(playlistId, podcast) {
  return (dispatch) => {
    dispatch(playlistsAddInit());
    return fetch(`http://localhost:8888/api/playlists/${playlistId}/podcasts/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: podcast._id,
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.message) {
        dispatch(playlistsAddFail(response.message));
      } else {
        dispatch(playlistsAddSucc(playlistId, podcast));
      }
    })
    .catch((e) => {
      dispatch(playlistsAddFail(e));
    });
  };
}

export function deleteFromPlaylist(playlistId, podcastId) {
  return (dispatch) => {
    dispatch(playlistsRemoveInit());
    return fetch(`http://localhost:8888/api/playlists/${playlistId}/podcasts/${podcastId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.message) {
        dispatch(playlistsRemoveFail(response.message));
      } else {
        dispatch(playlistsRemoveSucc(playlistId, podcastId));
      }
    })
    .catch((e) => {
      dispatch(playlistsRemoveFail(e));
    });
  };
}
