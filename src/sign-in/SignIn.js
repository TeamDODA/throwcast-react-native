import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import * as authActions from '../modules/auth/authActions';
import * as authFormActions from '../components/auth-form/authFormActions';
import toSignUp from '../sign-up/signUpActions';
import AuthForm from '../components/auth-form/AuthForm';
import s from './styles';

const SignIn = props => {
  const { actions, auth, authForm } = props;
  return (
    <View style={s.container}>
      <View style={s.row}>
        <Text style={s.title}>Throwcast</Text>
      </View>
      <View style={s.row}>
        <AuthForm authForm={authForm} {...actions} />
      </View>
      <View style={s.row}>
        <TouchableHighlight
          style={s.button}
          onPress={() => actions.signIn(authForm)}
          disabled={auth.pending}
          underlayColor="#99d9f4"
        >
          <Text style={s.buttonText}>Sign in</Text>
        </TouchableHighlight>
        <Text style={s.signUp} onPress={actions.toSignUp}>Sign Up</Text>
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
  actions: bindActionCreators({ toSignUp, ...authActions, ...authFormActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
