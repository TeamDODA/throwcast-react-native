import { StyleSheet } from 'react-native';

const playlistEntryStyles = StyleSheet.create({
  box: {
    borderColor: '#303030',
    borderBottomWidth: 0.4,
    height: 60,
  },
  title: {
    color: '#fffaf0',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 18,
    paddingLeft: 10,
    paddingTop: 5,
  },
  artist: {
    color: 'rgb(136, 136, 136)',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 16,
    paddingLeft: 10,
  },
});

export default playlistEntryStyles;
