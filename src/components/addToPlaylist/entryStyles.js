import { StyleSheet } from 'react-native';

const entryStyles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  box: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderColor: '#303030',
    borderBottomWidth: 0.4,
    height: 30,
  },
  info: {
    width: 280,
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
