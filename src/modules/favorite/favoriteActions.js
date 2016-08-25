import { types } from './';
import { BASE_API_URL } from '../../constants';

export function favoritesPendingTrue() {
  return {
    type: types.FAVORITES_PENDING_TRUE,
  };
}

export function favoritesPendingFalse() {
  return {
    type: types.FAVORITES_PENDING_FALSE,
  };
}

export function favoritesLoadingSucc(response) {
  return {
    type: types.FAVORITES_LOADING_SUCC,
    response,
  };
}

export function favoritesLoadingFail({ message }) {
  return {
    type: types.FAVORITES_LOADING_FAIL,
    message,
  };
}

export function favoritesAddPlaylistSucc(response) {
  return {
    type: types.FAVORITES_ADD_PLAYLIST_SUCC,
    response,
  };
}

export function favoritesAddPodcastSucc(response) {
  return {
    type: types.FAVORITES_ADD_PODCAST_SUCC,
    response,
  };
}

export function favoritesAddStationSucc(response) {
  return {
    type: types.FAVORITES_ADD_STATION_SUCC,
    response,
  };
}

export function favoritesAddFail({ message }) {
  return {
    type: types.FAVORITES_ADD_FAIL,
    message,
  };
}

export function favoritesDeletePlaylistSucc(_id) {
  return {
    type: types.FAVORITES_DELETE_PLAYLIST_SUCC,
    _id,
  };
}

export function favoritesDeletePodcastSucc(_id) {
  return {
    type: types.FAVORITES_DELETE_PODCAST_SUCC,
    _id,
  };
}

export function favoritesDeleteStationSucc(_id) {
  return {
    type: types.FAVORITES_DELETE_STATION_SUCC,
    _id,
  };
}

export function favoritesDeleteFail({ message }) {
  return {
    type: types.FAVORITES_DELETE_FAIL,
    message,
  };
}

const addSuccess = {
  playlists: favoritesAddPlaylistSucc,
  podcasts: favoritesAddPodcastSucc,
  stations: favoritesAddStationSucc,
};

const deleteSuccess = {
  playlists: favoritesDeletePlaylistSucc,
  podcasts: favoritesDeletePodcastSucc,
  stations: favoritesDeleteStationSucc,
};

export function getFavorites() {
  return (dispatch, getState) => {
    dispatch(favoritesPendingTrue());
    const { auth } = getState();
    return fetch(`${BASE_API_URL}/api/users/favorites`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${auth.token}`,
      },
    })
    .then(response => response.json())
    .then(response => {
      dispatch(favoritesPendingFalse());
      if (response.message) {
        dispatch(favoritesLoadingFail(response));
      } else {
        dispatch(favoritesLoadingSucc(response));
      }
    })
    .catch(error => {
      dispatch(favoritesLoadingFail(error));
    });
  };
}

export function addFavorite({ from, localField }) {
  return (dispatch, getState) => {
    dispatch(favoritesPendingTrue());
    const { auth } = getState();
    return fetch(`${BASE_API_URL}/api/favorites/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify({ from, localField }),
    })
    .then(response => response.json())
    .then(response => {
      dispatch(favoritesPendingFalse());
      if (response.message) {
        dispatch(favoritesAddFail(response));
      } else {
        dispatch(addSuccess[from](response));
      }
    })
    .catch(error => {
      dispatch(favoritesAddFail(error));
    });
  };
}

export function deleteFavorite({ from, localField }) {
  return (dispatch, getState) => {
    dispatch(favoritesPendingTrue());
    const { auth } = getState();
    return fetch(`${BASE_API_URL}/api/users/favorites/${from}/${localField}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${auth.token}`,
      },
    })
    .then(response => {
      dispatch(favoritesPendingFalse());
      if (response.status !== 204) {
        dispatch(favoritesDeleteFail({ message: response.status }));
      } else {
        dispatch(deleteSuccess[from](localField));
      }
    })
    .catch(error => {
      dispatch(favoritesDeleteFail(error));
    });
  };
}
