import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import t from 'tcomb-form-native';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import * as actionCreators from './signinActions';
import styles from './styles';

const Form = t.form.Form;
const Person = t.struct({
  name: t.String,
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
    const value = this.refs.form.getValue();
    if (value) {
      this.props.actions.signin(value.name, value.password);
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
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
