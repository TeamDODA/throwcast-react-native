import * as types from './constants';

export function authFormInit() {
  return { type: types.AUTH_FORM_INIT };
}

export function onAuthFormChange(value) {
  return {
    type: types.AUTH_FORM_CHANGE,
    value,
  };
}
