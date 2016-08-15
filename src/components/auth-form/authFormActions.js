import { types } from './';

export function authFormInit() {
  return { type: types.AUTH_FORM_INIT };
}

export function onAuthFormChange(value) {
  return {
    type: types.AUTH_FORM_CHANGE,
    value,
  };
}
