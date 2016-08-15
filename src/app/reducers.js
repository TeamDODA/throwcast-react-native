import { combineReducers } from 'redux';
import auth from '../modules/auth/authReducers';
import playlist from '../playlist/playlistReducers';
import player from '../player/playerReducers';
import podcast from '../modules/podcast/podcastReducers';
import routes from './routes';
import signUp from '../sign-up/signUpReducers';
import station from '../modules/station/stationReducers';

export default combineReducers({
  auth,
  playlist,
  player,
  podcast,
  routes,
  signUp,
  station,
});
