import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  showContainer: {
    height: window.height,
  },
  hideContainer: {
    flex: 0,
  },
  innerContainer: {
    backgroundColor: 'rgba(0,0,0,.9)',
    height: window.height,
  },
  loadContainer: {
    backgroundColor: 'rgba(0,0,0,.9)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Helvetica Neue',
  },
  downButton: {
    backgroundColor: 'black',
    position: 'absolute',
    top: 10,
    paddingLeft: 20,
  },
});

export default styles;
