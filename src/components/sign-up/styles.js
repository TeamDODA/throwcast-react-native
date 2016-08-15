import { StyleSheet } from 'react-native';

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
  signIn: {
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

export default styles;
