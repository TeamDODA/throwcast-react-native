import { types } from './';
import { BASE_API_URL } from '../../constants';

export function setUser(response) {
  return { type: types.SET_USER, response };
}

export function unsetUser() {
  return { type: types.UNSET_USER };
}

export function setUserPlaylists(response) {
  return { type: types.SET_USER_PLAYLISTS, response };
}

export function getUserPlaylists() {
  return (dispatch, getState) => {
    const { auth } = getState();
    return fetch(`${BASE_API_URL}/api/users/playlists`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${auth.token}`,
      },
    })
    .then(response => response.json())
    .then(response => {
      if (response.message) {
        // TODO: Handle error for getting playlists.
      } else {
        dispatch(setUserPlaylists(response));
      }
    })
    .catch(() => {
      // TODO: Handle error for getting playlists.
    });
  };
}
