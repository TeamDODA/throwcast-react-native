import { types } from './';
import { BASE_API_URL } from '../../constants';

export function favoritesLoadingInit() {
  return {
    type: types.FAVORITES_LOADING_INIT,
  };
}

export function favoritesLoadingSucc(response) {
  return {
    type: types.FAVORITES_LOADING_SUCC,
    response,
  };
}

export function favoritesLoadingFail(message) {
  return {
    type: types.FAVORITES_LOADING_FAIL,
    message,
  };
}

export function favoritesAddInit() {
  return {
    type: types.FAVORITES_ADD_INIT,
  };
}

export function favoritesAddSucc(favorites) {
  return {
    type: types.FAVORITES_ADD_SUCC,
    favorites,
  };
}

export function favoritesAddFail(message) {
  return {
    type: types.FAVORITES_ADD_FAIL,
    message,
  };
}

export function favoritesDeleteInit() {
  return {
    type: types.FAVORITES_DELETE_INIT,
  };
}

export function favoritesDeleteSucc(favorites) {
  return {
    type: types.FAVORITES_DELETE_SUCC,
    favorites,
  };
}

export function favoritesDeleteFail(message) {
  return {
    type: types.FAVORITES_DELETE_FAIL,
    message,
  };
}

export function getFavorites() {
  return (dispatch, getState) => {
    dispatch(favoritesLoadingInit());
    const { auth } = getState();
    return fetch(`${BASE_API_URL}/api/users/favorites`, {
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
        dispatch(favoritesLoadingFail(response.message));
      } else {
        dispatch(favoritesLoadingSucc(response));
      }
    })
    .catch((e) => {
      dispatch(favoritesLoadingFail(e));
    });
  };
}

export function deleteFavorite(favoritesId) {
  return (dispatch, getState) => {
    dispatch(favoritesDeleteInit());
    const { auth } = getState();
    return fetch(`${BASE_API_URL}/api/users/favorites/${favoritesId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${auth.token}`,
      },
    })
    .then((response) => {
      if (response.status !== 204) {
        dispatch(favoritesDeleteFail(response.status));
      } else {
        dispatch(favoritesDeleteSucc(response.favorites));
      }
    })
    .catch((e) => {
      dispatch(favoritesDeleteFail(e));
    });
  };
}

export function addFavorite(id) {
  return (dispatch, getState) => {
    dispatch(favoritesAddInit());
    const { auth } = getState();
    return fetch(`${BASE_API_URL}/api/favorites/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify(id),
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.message) {
        dispatch(favoritesAddFail(response.message));
      } else {
        dispatch(favoritesAddSucc(response.favorites));
      }
    })
    .catch((e) => {
      dispatch(favoritesAddFail(e));
    });
  };
}
