import { combineReducers } from 'redux';
import routes from './routes';
import auth from '../signin/signinReducers';

export default combineReducers({
  auth,
  routes,
});
