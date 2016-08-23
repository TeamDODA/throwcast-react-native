import { types } from './';

export function podcastLoadingInit() {
  return {
    type: types.PODCASTS_LOADING_INIT,
  };
}

export function podcastsLoadingSucc(podcasts) {
  return {
    type: types.PODCASTS_LOADING_SUCC,
    podcasts,
  };
}

export function podcastsLoadingFail(message) {
  return {
    type: types.PODCASTS_LOADING_FAIL,
    message,
  };
}

export function getPodcasts() {
  return (dispatch) => {
    dispatch(podcastLoadingInit());
    return fetch('http://localhost:8888/api/podcasts/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.message) {
        dispatch(podcastsLoadingFail(response.message));
      } else {
        dispatch(podcastsLoadingSucc(response.slice(0, 100)));
      }
    })
    .catch((e) => {
      dispatch(podcastsLoadingFail(e));
    });
  };
}
