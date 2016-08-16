import { Actions } from 'react-native-router-flux';

export function queueLoadingInit() {
  return {
    type: 'QUEUE_LOADING_INIT',
  };
}

export function queueLoadingSucc(podcasts) {
  return {
    type: 'QUEUE_LOADING_SUCC',
    podcasts,
  };
}

export function queueLoadingFail(message) {
  return {
    type: 'QUEUE_LOADING_FAIL',
    message,
  };
}

export function queueDetail({ imageUrl, title, _id }) {
  return {
    type: 'QUEUE_DETAIL',
    title,
    imageUrl,
    _id,
  };
}

export function getQueue(station) {
  return (dispatch) => {
    dispatch(queueLoadingInit());
    dispatch(queueDetail(station));
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
        dispatch(queueLoadingFail(response.message));
      } else {
        dispatch(queueLoadingSucc(response.data));
        Actions.queue();
      }
    })
    .catch((e) => {
      dispatch(queueLoadingFail(e));
    });
  };
}
