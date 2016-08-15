import store from 'react-native-simple-store';
import { Actions } from 'react-native-router-flux';
import { actions as authActions } from '../../modules/auth';

export default function toSignIn() {
  return dispatch => store.delete('@Auth:token')
    .then(() => {
      dispatch(authActions.authInit());
      Actions.signIn();
    });
}
