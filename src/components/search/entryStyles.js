import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const entryStyles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  box: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderColor: '#303030',
    borderBottomWidth: 0.4,
    height: 56,
  },
  info: {
    width: window.width - 24,
  },
  title: {
    color: '#FFF',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 12,
    paddingLeft: 10,
    paddingTop: 5,
    marginBottom: 5,
  },
  description: {
    color: 'rgb(136, 136, 136)',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 10,
    paddingLeft: 10,
  },
});

export default entryStyles;
