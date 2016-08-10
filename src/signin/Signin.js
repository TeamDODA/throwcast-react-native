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
import styles from './styles';

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
    const userCredentials = this.refs.form.getValue();
    if (userCredentials) {
      this.props.actions.signin(userCredentials);
    }
  }

  render() {
    const statusMessage = this.props.auth.statusMessage;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>Throwcast</Text>
        </View>
        <View style={styles.row}>
          <Form
            ref="form"
            type={Person}
            options={options}
          />
        </View>
        <View style={styles.row}>
          <TouchableHighlight
            onPress={() => this.signIn()}
            style={styles.button}
            underlayColor="#99d9f4"
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableHighlight>
          <Text style={styles.signup} onPress={this.props.actions.toSignup}>Sign Up</Text>
          {statusMessage && <Text style={styles.notification}>{statusMessage}</Text>}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({toSignup, ...actionCreators}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
