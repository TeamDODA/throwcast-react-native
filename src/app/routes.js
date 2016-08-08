import { ActionConst } from 'react-native-router-flux';

const initialState = {
  scene: {},
};

const routes = function routes(state = initialState, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS:
      return Object.assign({}, state, {
        scene: action.scene,
      });

    default:
      return state;
  }
};

export default routes;
