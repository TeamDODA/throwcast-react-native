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
import toSignIn from '../sign-in/signInActions';
import AuthForm from '../components/auth-form/AuthForm';
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
  actions: bindActionCreators({ toSignIn, ...authActions, ...authFormActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
