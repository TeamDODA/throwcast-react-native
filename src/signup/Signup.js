import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import t from 'tcomb-form-native';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import * as actionCreators from './signupActions';
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

class SignUp extends Component {
  signUp() {
    const value = this.refs.form.getValue();
    if (value) {
      this.props.actions.signup(value.name, value.password);
    }
  }

  render() {
    const statusMessage = this.props.signup.statusMessage;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Form
            ref="form"
            type={Person}
            options={options}
          />
        </View>
        <View style={styles.row}>
          <TouchableHighlight
            onPress={() => this.signUp()}
            style={styles.button}
            underlayColor="#99d9f4"
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableHighlight>
          <Text style={styles.signin} onPress={this.props.actions.toSignin}>Sign In</Text>
          {statusMessage && <Text style={styles.notification}>{statusMessage}</Text>}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  signup: state.signup,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
