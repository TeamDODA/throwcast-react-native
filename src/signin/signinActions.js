fetch('http://localhost:3000/iosAuth/local/signin', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: value.name,
    password: value.password,
  }),
})
.then((response) => response.json())
.then((responseData) => {
  if (responseData.message) {
    this.setState({
      message: responseData.message,
    });
  } else if (responseData.id_token) {
    this.setState({
      message: '',
    });
    this.props.Store.save('user', responseData.id_token)
      .then(() => {
        Actions.app();
      });
  }
})
.done();
