import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: window.width,
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  box: {
    height: 40,
    width: (window.width * (3 / 8)),
    alignItems: 'center',
  },
  activeBox: {
    backgroundColor: 'rgba(204, 0, 204, 0.9)',
  },
  inactiveBox: {
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  smallBox: {
    height: 40,
    width: (window.width * (1 / 8)),
    backgroundColor: 'rgba(75,0,130,0.4)',
    alignItems: 'center',
  },
  activeButton: {
    marginTop: 6,
  },
  inactiveButton: {
    marginTop: 7,
    color: '#ff1aff',
  },
  text: {
    marginTop: 12,
    marginLeft: 8,
    marginRight: 8,
    color: '#FFF',
    fontSize: 12,
    fontFamily: 'HelveticaNeue',
  },
});

export default styles;
