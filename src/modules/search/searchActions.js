import { types } from './';
import { BASE_API_URL } from '../../constants';


export function searchInit() {
  return {
    type: types.SEARCH_INIT,
  };
}

export function searchSucc(list, type) {
  return {
    type,
    list,
  };
}

export function searchClear(message) {
  return {
    type: types.SEARCH_CLEAR,
    message,
  };
}

const searchOptions = function searchOptions(token, query) {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(query),
  };
};

const handleResponseMessage = function handleResponseMessage() {
  return response => {
    if (response.message) {
      throw new Error(`${response.message || 'Oops, something went wrong!'}`);
    }
    return response;
  };
};

export function search(uri, query, type) {
  return (dispatch, getState) => {
    const { auth } = getState();
    return fetch(`${BASE_API_URL}/api/${uri}/search`, searchOptions(auth.token, query))
    .then((response) => response.json())
    .then(handleResponseMessage())
    .then((response) => dispatch(searchSucc(response.hits.hits, types[type])))
    .catch(e => dispatch(searchClear(e.message || e)));
  };
}
