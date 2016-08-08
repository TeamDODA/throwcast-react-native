import { combineReducers } from 'redux';
import routes from './routes';
import auth from '../signin/signinReducers';
import signup from '../signup/signupReducers';

export default combineReducers({
  auth,
  signup,
  routes,
});
