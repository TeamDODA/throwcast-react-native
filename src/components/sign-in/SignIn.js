// eslint-disable-line global-require

import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Spinner from 'react-native-spinkit';

import AuthForm, { actions as authFormActions } from '../auth-form';
import { actions as authActions } from '../../modules/auth';
import s from './styles';

class SignIn extends Component {
  renderForm() {
    const { actions, auth, authForm } = this.props;
    return (
      <View>
        <View style={s.row}>
          <AuthForm authForm={authForm} {...actions} />
        </View>
        <View style={s.row}>
          <TouchableHighlight
            style={s.button}
            onPress={() => actions.signIn(authForm)}
            disabled={auth.pending}
          >
            <Text style={s.buttonText}>Login</Text>
          </TouchableHighlight>
          <Text style={s.signUp} onPress={actions.toSignUp}>Sign up</Text>
          {auth.message && <Text style={s.notification}>{auth.message}</Text>}
        </View>
      </View>
    );
  }

  renderLoading() {
    return (
      <View style={s.loadContainer}>
        <Spinner type="Wave" size={100} color="#FFFFFF" />
      </View>
    );
  }

  render() {
    const { auth } = this.props;
    const comp = auth.pending ? this.renderLoading() : this.renderForm();
    return (
      <View style={s.container}>
        <Image source={require('../../img/background.jpg')} style={s.backgroundImage} />
        <View style={s.innerContainer}>
          <View style={s.row}>
            <Text style={s.title}>Throwcast</Text>
          </View>
          {comp}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  authForm: state.authForm,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...authActions, ...authFormActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
