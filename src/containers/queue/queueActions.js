import { Actions } from 'react-native-router-flux';
import { showLoadModal, hideModal } from '../base-modal/baseModalActions';
import { BASE_API_URL } from '../../constants';

export function queueLoadingInit() {
  return {
    type: 'QUEUE_LOADING_INIT',
  };
}

export function queueLoadingSucc({ podcasts }) {
  return {
    type: 'QUEUE_LOADING_SUCC',
    podcasts,
  };
}

export function queueLoadingFail({ message }) {
  return {
    type: 'QUEUE_LOADING_FAIL',
    message,
  };
}

export function queueDetail({ _id, title, owner, image }, dataType) {
  return {
    type: 'QUEUE_DETAIL',
    _id,
    title,
    owner,
    image,
    dataType,
  };
}

export function getQueue(list, type) {
  return (dispatch, getState) => {
    const url = `${BASE_API_URL}/api/${type}/${list._id}/`;
    const { auth } = getState();
    dispatch(showLoadModal());
    dispatch(queueLoadingInit());
    dispatch(queueDetail(list, type));
    return fetch(url, {
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
        dispatch(queueLoadingFail(response));
      } else {
        dispatch(queueLoadingSucc(response));
        dispatch(hideModal());
        Actions.queue();
      }
    })
    .catch(error => dispatch(queueLoadingFail(error)));
  };
}
