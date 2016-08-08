import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import t from 'tcomb-form-native';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import * as actionCreators from './signupActions';

const Form = t.form.Form;
const Person = t.struct({
  name: t.string,
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
  notification: {
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 15,
    alignSelf: 'center',
    marginBottom: 30,
  },
});

class SignUp extends Component {
  signUp() {
    const value = this.refs.form.getValue();
    if (value) {
      this.props.actions.signupUser(value.name, value.password);
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
