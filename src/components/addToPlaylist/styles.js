import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.8)',
    width: window.width,
    alignItems: 'center',
    top: 0,
  },
  headerTitle: {
    marginTop: 20,
    fontFamily: 'Helvetica Neue',
    color: '#FFF',
    fontSize: 12,
  },
});

export default styles;
