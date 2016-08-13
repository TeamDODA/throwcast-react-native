import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import t from 'tcomb-form-native';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import * as actionCreators from './signinActions';
import { toSignup } from '../signup/signupActions';
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

class SignIn extends Component {
  signIn() {
    const userCredentials = this.form.getValue();
    if (userCredentials) {
      this.props.actions.signin(userCredentials);
    }
  }

  render() {
    const statusMessage = this.props.auth.statusMessage;
    return (
      <View style={s.container}>
        <View style={s.row}>
          <Text style={s.title}>Throwcast</Text>
        </View>
        <View style={s.row}>
          <Form
            ref={c => (this.form = c)}
            type={Person}
            options={options}
          />
        </View>
        <View style={s.row}>
          <TouchableHighlight
            onPress={() => this.signIn()}
            style={s.button}
            underlayColor="#99d9f4"
          >
            <Text style={s.buttonText}>Sign in</Text>
          </TouchableHighlight>
          <Text style={s.signup} onPress={this.props.actions.toSignup}>Sign Up</Text>
          {statusMessage && <Text style={s.notification}>{statusMessage}</Text>}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign(actionCreators, { toSignup }), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
