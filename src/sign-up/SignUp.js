import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import t from 'tcomb-form-native';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import * as actionCreators from './signUpActions';
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

  signUp() {
    const userCredentials = this.form.getValue();
    if (userCredentials) {
      this.props.actions.signUp(userCredentials);
    }
  }

  render() {
    const statusMessage = this.props.signUp.statusMessage;
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
            onPress={() => this.signUp()}
            style={s.button}
            underlayColor="#99d9f4"
          >
            <Text style={s.buttonText}>Sign Up</Text>
          </TouchableHighlight>
          <Text style={s.signIn} onPress={this.props.actions.toSignIn}>Sign In</Text>
          {statusMessage && <Text style={s.notification}>{statusMessage}</Text>}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  signUp: state.signUp,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign(actionCreators, { toSignIn }), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
