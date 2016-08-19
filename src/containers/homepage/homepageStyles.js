import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#121212',
    flex: 1,
    height: window.height,
  },
  innerContainer: {
    marginTop: 25,
    flex: 1,
  },
  header: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.8)',
    width: window.width,
    height: 20,
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  headerTitle: {
    marginTop: 2,
    fontFamily: 'Helvetica Neue',
    color: '#FFF',
    fontSize: 10,
  },
  listTitle: {
    marginTop: 5,
    marginLeft: 5,
    fontFamily: 'Helvetica Neue',
    color: '#808080',
    fontSize: 10,
  },
  scrollContainer: {
    marginTop: 10,
    height: 162,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default styles;
