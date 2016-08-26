import { StyleSheet } from 'react-native';

const queueEntryStyles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  box: {
    flexDirection: 'row',
    backgroundColor: '#121212',
    borderColor: '#303030',
    borderBottomWidth: 0.4,
    height: 66,
  },
  info: {
    width: 280,
    height: 66,
  },
  activeTitle: {
    color: '#ff1aff',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 12,
    paddingLeft: 10,
    paddingTop: 5,
  },
  inactiveTitle: {
    color: '#fffaf0',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 12,
    paddingLeft: 10,
    paddingTop: 5,
  },
  description: {
    color: 'rgb(136, 136, 136)',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 10,
    paddingLeft: 10,
  },
  addButton: {
    backgroundColor: 'transparent',
    marginTop: 16,
    marginLeft: 36,
  },
});

export default queueEntryStyles;
