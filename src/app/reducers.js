import { combineReducers } from 'redux';
import routes from './routes';
import auth from '../signin/signinReducers';
import signup from '../signup/signupReducers';
import playlist from '../playlist/playlistReducers';

export default combineReducers({
  auth,
  signup,
  playlist,
  routes,
});
