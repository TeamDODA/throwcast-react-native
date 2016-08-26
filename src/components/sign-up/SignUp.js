import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AuthForm, { actions as authFormActions } from '../auth-form';
import { actions as authActions } from '../../modules/auth';
import s from './styles';

const SignUp = props => {
  const { actions, auth, authForm } = props;
  return (
    <View style={s.container}>
      <Image source={require('../../img/background.jpg')} style={s.backgroundImage} />
      <View style={s.innerContainer}>
        <View style={s.row}>
          <AuthForm authForm={authForm} {...actions} />
        </View>
        <View style={s.row}>
          <TouchableHighlight
            style={s.button}
            onPress={() => actions.signUp(authForm)}
            disabled={auth.pending}
            underlayColor="#99d9f4"
          >
            <Text style={s.buttonText}>Sign up</Text>
          </TouchableHighlight>
          <Text style={s.signIn} onPress={actions.toSignIn}>Login</Text>
          {auth.message && <Text style={s.notification}>{auth.message}</Text>}
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  authForm: state.authForm,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...authActions, ...authFormActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
