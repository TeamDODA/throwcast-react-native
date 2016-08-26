import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  backgroundImage: {
    resizeMode: 'cover',
    height: 1200,
  },
  innerContainer: {
    position: 'absolute',
    width: window.width,
    top: 100,
  },
  title: {
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 72,
    color: '#FFF',
    backgroundColor: 'transparent',
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 50,
    backgroundColor: 'rgba(178,76,76,0.8)',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 10,
  },
  signUp: {
    backgroundColor: 'transparent',
    marginTop: 10,
    color: '#FFF',
    alignSelf: 'center',
    fontSize: 14,
  },
  notification: {
    backgroundColor: 'transparent',
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 15,
    alignSelf: 'center',
    marginBottom: 30,
  },
  loadContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
});

export default styles;
