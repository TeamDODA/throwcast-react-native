import { types } from './';

export function subscriptionsLoadingInit() {
  return {
    type: types.SUBSCRIPTIONS_LOADING_INIT,
  };
}

export function subscriptionsLoadingSucc(userId, subscriptions) {
  return {
    type: types.SUBSCRIPTIONS_LOADING_SUCC,
    userId,
    subscriptions,
  };
}

export function subscriptionsLoadingFail(message) {
  return {
    type: types.SUBSCRIPTIONS_LOADING_FAIL,
    message,
  };
}

export function subscriptionsUpdateInit() {
  return {
    type: types.SUBSCRIPTIONS_UPDATE_INIT,
  };
}

export function subscriptionsUpdateSucc(subscriptions) {
  return {
    type: types.SUBSCRIPTIONS_UPDATE_SUCC,
    subscriptions,
  };
}

export function subscriptionsUpdateFail(message) {
  return {
    type: types.SUBSCRIPTIONS_UPDATE_FAIL,
    message,
  };
}

export function getSubscriptions() {
  return (dispatch, getState) => {
    dispatch(subscriptionsLoadingInit());
    const { auth } = getState();
    return fetch('http://localhost:8888/api/users/me', {
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
        dispatch(subscriptionsLoadingFail(response.message));
      } else {
        dispatch(subscriptionsLoadingSucc(response._id, response.subscriptions));
      }
    })
    .catch((e) => {
      dispatch(subscriptionsLoadingFail(e));
    });
  };
}

export function updateSubscriptions(subscriptions) {
  return (dispatch, getState) => {
    dispatch(subscriptionsUpdateInit());
    const { auth } = getState();
    return fetch('http://localhost:8888/api/users/subscriptions/', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify(subscriptions),
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.message) {
        dispatch(subscriptionsUpdateFail(response.message));
      } else {
        dispatch(subscriptionsUpdateSucc(response.subscriptions));
      }
    })
    .catch((e) => {
      dispatch(subscriptionsUpdateFail(e));
    });
  };
}
