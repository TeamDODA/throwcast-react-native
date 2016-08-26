import React from 'react';
import t from 'tcomb-form-native';

const Form = t.form.Form;
const textBoxCSS = t.form.Form.stylesheet.textbox.normal;
const groupCSS = t.form.Form.stylesheet.formGroup.normal;

Object.assign(textBoxCSS, {
  marginBottom: -5,
  marginLeft: 20,
  marginRight: 20,
  borderWidth: 0,
  color: '#FFF',
});

Object.assign(groupCSS, {
  marginBottom: 6,
  borderBottomColor: '#FFF',
  borderBottomWidth: 0.8,
});

const UserCredentials = t.struct({
  username: t.String,
  password: t.String,
});

const options = {
  auto: 'placeholders',
  fields: {
    username: {
      autoCorrect: false,
      autoCapitalize: 'none',
      placeholderTextColor: '#FFF',
    },
    password: {
      password: true,
      secureTextEntry: true,
      placeholderTextColor: '#FFF',
    },
  },
};

const AuthForm = ({ onAuthFormChange, authForm }) => (
  <Form
    type={UserCredentials}
    options={options}
    placeholderTextColor="#FFF"
    value={authForm}
    onChange={onAuthFormChange}
  />
);

export default AuthForm;
