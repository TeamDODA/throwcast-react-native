import { combineReducers } from 'redux';
import { reducers as auth } from './modules/auth';
import { reducers as authForm } from './components/auth-form';
import { reducers as player } from './containers/player';
import { reducers as playlist } from './containers/playlist';
import { reducers as podcast } from './modules/podcast';
import routes from './routes';
import { reducers as station } from './modules/station';

export default combineReducers({
  auth,
  authForm,
  player,
  playlist,
  podcast,
  routes,
  station,
});
