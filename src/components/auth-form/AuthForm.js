import React from 'react';
import t from 'tcomb-form-native';

const Form = t.form.Form;
const UserCredentials = t.struct({
  username: t.String,
  password: t.String,
});

const options = {
  fields: {
    username: {
      autoCorrect: false,
      autoCapitalize: 'none',
    },
    password: {
      password: true,
      secureTextEntry: true,
    },
  },
};

const AuthForm = ({ onAuthFormChange, authForm }) => (
  <Form
    type={UserCredentials}
    options={options}
    value={authForm}
    onChange={onAuthFormChange}
  />
);

export default AuthForm;
