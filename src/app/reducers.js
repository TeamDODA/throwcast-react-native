import { combineReducers } from 'redux';
import routes from './routes';
import signinReducers from '../signin/signinReducers';

export default combineReducers({
  auth: signinReducers,
  routes,
});
