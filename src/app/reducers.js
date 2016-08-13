import { combineReducers } from 'redux';
import auth from '../signin/signinReducers';
import playlist from '../playlist/playlistReducers';
import player from '../player/playerReducers';
import podcast from '../modules/podcast/podcastReducers';
import routes from './routes';
import signup from '../signup/signupReducers';
import station from '../modules/station/stationReducers';

export default combineReducers({
  auth,
  playlist,
  player,
  podcast,
  routes,
  signup,
  station,
});
