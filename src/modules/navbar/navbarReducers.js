const initialState = {
  active: 'homepage',
};

const navbar = function routes(state = initialState, action) {
  switch (action.type) {
    case 'NAV_FOCUS':
      return {
        ...state,
        active: action.active,
      };
    default:
      return state;
  }
};

export default navbar;
