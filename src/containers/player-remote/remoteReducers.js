const initialState = {
  duration: 0,
  currentTime: 0,
  audio: null,
  animation: 'slideInRight',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SELECT_PODCAST':
      return Object.assign({}, state, {
        duration: 0,
        currentTime: 0,
      });
    case 'SET_AUDIO_REF':
      return Object.assign({}, state, {
        audio: action.audio,
      });
    case 'SET_DURATION':
      return Object.assign({}, state, {
        duration: action.duration,
      });
    case 'SET_CURRENT_TIME':
      return Object.assign({}, state, {
        currentTime: action.currentTime,
      });
    case 'NEXT_PODCAST':
      return Object.assign({}, state, {
        currentTime: 0,
        duration: 0,
        animation: action.animation,
      });
    case 'PREVIOUS_PODCAST':
      return Object.assign({}, state, {
        currentTime: 0,
        duration: 0,
        animation: action.animation,
      });
    default:
      return state;
  }
}
