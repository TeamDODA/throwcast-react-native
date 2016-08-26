const initialState = {
  duration: 0,
  currentTime: 0,
  audio: null,
  animation: 'slideInRight',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SELECT_PODCAST':
      return {
        ...state,
        duration: 0,
        currentTime: 0,
      };
    case 'SET_AUDIO_REF':
      return {
        ...state,
        audio: action.audio,
      };
    case 'SET_DURATION':
      return {
        ...state,
        duration: action.duration,
      };
    case 'SET_CURRENT_TIME':
      return {
        ...state,
        currentTime: action.currentTime,
      };
    case 'NEXT_PODCAST':
      return {
        ...state,
        currentTime: 0,
        duration: 0,
        animation: action.animation,
      };
    case 'PREVIOUS_PODCAST':
      return {
        ...state,
        currentTime: 0,
        duration: 0,
        animation: action.animation,
      };
    case 'PLAYER_INIT':
      return {
        ...state,
        currentTime: 0,
        duration: 0,
        animation: 'slideInRight',
      };
    default:
      return state;
  }
}
