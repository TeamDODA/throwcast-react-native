import { Actions } from 'react-native-router-flux';

export function changeFocus(active) {
  return {
    type: 'NAV_FOCUS',
    active,
  };
}

export function toTab(active) {
  return dispatch => {
    dispatch(changeFocus(active));
    Actions[active]();
  };
}
