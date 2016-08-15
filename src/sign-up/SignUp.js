import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import t from 'tcomb-form-native';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import * as authActions from '../modules/auth/authActions';
import toSignIn from '../sign-in/signInActions';
import s from './styles';

const Form = t.form.Form;
const Person = t.struct({
  username: t.String,
  password: t.String,
});

const options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true,
    },
  },
};

class SignUp extends Component {
  render() {
    const { actions, auth } = this.props;
    return (
      <View style={s.container}>
        <View style={s.row}>
          <Form
            ref={c => (this.form = c)}
            type={Person}
            options={options}
          />
        </View>
        <View style={s.row}>
          <TouchableHighlight
            onPress={() => actions.signUp(this.form.getValue())}
            style={s.button}
            underlayColor="#99d9f4"
          >
            <Text style={s.buttonText}>Sign Up</Text>
          </TouchableHighlight>
          <Text style={s.signIn} onPress={actions.toSignIn}>Sign In</Text>
          {auth.message && <Text style={s.notification}>{auth.message}</Text>}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, authActions, { toSignIn }), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
