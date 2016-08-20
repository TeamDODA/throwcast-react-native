import React from 'react';
import {
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
          <Text style={s.buttonText}>Sign Up</Text>
        </TouchableHighlight>
        <Text style={s.signIn} onPress={actions.toSignIn}>Sign In</Text>
        {auth.message && <Text style={s.notification}>{auth.message}</Text>}
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
