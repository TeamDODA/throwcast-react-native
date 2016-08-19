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
  return (dispatch) => {
    dispatch(stationsLoadingInit());
    return fetch('http://localhost:8888/api/stations/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.message) {
        dispatch(stationsLoadingFail(response.message));
      } else {
        dispatch(stationsLoadingSucc(response.data));
      }
    })
    .catch((e) => {
      dispatch(stationsLoadingFail(e));
    });
  };
}
