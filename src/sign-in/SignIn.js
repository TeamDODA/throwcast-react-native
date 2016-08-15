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
import { toSignUp } from '../sign-up/signUpActions';
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
  render() {
    const { actions, auth } = this.props;
    return (
      <View style={s.container}>
        <View style={s.row}>
          <Text style={s.title}>Throwcast</Text>
        </View>
        <View style={s.row}>
          <Form ref={c => (this.form = c)} type={Person} options={options} />
        </View>
        <View style={s.row}>
          <TouchableHighlight
            onPress={() => actions.signIn(this.form.getValue())}
            disabled={auth.pending}
            style={s.button}
            underlayColor="#99d9f4"
          >
            <Text style={s.buttonText}>Sign in</Text>
          </TouchableHighlight>
          <Text style={s.signUp} onPress={actions.toSignUp}>Sign Up</Text>
          {auth.message && <Text style={s.notification}>{auth.message}</Text>}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign({}, authActions, { toSignUp }), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
