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

export function queueDetail({ image, title, _id }) {
  return {
    type: 'QUEUE_DETAIL',
    title,
    image,
    _id,
  };
}

export function getQueue(list, type) {
  return (dispatch) => {
    let url;
    dispatch(queueLoadingInit());
    dispatch(queueDetail(list));
    if (type === 'stations') {
      url = `http://localhost:8888/api/stations/${list._id}/podcasts/`;
      return fetch(url, {
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
          dispatch(queueLoadingSucc(response));
          Actions.queue();
        }
      })
      .catch((e) => {
        dispatch(queueLoadingFail(e));
      });
    }

    dispatch(queueLoadingSucc(list.podcasts));
    return Actions.queue();
  };
}
