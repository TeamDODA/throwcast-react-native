import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import t from 'tcomb-form-native';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import * as actionCreators from './signinActions';

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

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 120,
    padding: 20,
  },
  title: {
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 72,
    color: 'black',
    backgroundColor: 'transparent',
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  signup: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 24,
  },
  notification: {
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 15,
    alignSelf: 'center',
    marginBottom: 30,
  },
});

class SignIn extends Component {
  signIn() {
    const value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      this.props.actions.signinUser(value.name, value.password);
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
          <Text style={styles.signup} onPress={Actions.signUp}>Sign Up</Text>
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
