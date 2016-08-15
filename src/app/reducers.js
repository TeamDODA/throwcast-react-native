import { combineReducers } from 'redux';
import auth from '../modules/auth/authReducers';
import authForm from '../components/auth-form/authFormReducers';
import playlist from '../playlist/playlistReducers';
import player from '../player/playerReducers';
import podcast from '../modules/podcast/podcastReducers';
import routes from './routes';
import station from '../modules/station/stationReducers';

export default combineReducers({
  auth,
  authForm,
  playlist,
  player,
  podcast,
  routes,
  station,
});
