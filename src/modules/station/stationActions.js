import { types } from './';

export function stationsLoadingInit() {
  return {
    type: types.STATIONS_LOADING_INIT,
  };
}

export function stationsLoadingSucc(stations) {
  return {
    type: types.STATIONS_LOADING_SUCC,
    stations,
  };
}

export function stationsLoadingFail(message) {
  return {
    type: types.STATIONS_LOADING_FAIL,
    message,
  };
}

export function getStations() {
  return (dispatch, getState) => {
    const { auth } = getState();
    dispatch(stationsLoadingInit());
    return fetch('http://localhost:8888/api/stations/', {
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
        dispatch(stationsLoadingFail(response.message));
      } else {
        dispatch(stationsLoadingSucc(response));
      }
    })
    .catch((e) => {
      dispatch(stationsLoadingFail(e));
    });
  };
}
