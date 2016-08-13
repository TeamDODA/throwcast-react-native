import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');
const PARALLAX_HEADER_HEIGHT = 280;
const STICKY_HEADER_HEIGHT = 50;

const playlistStyles = StyleSheet.create({
  background: {
    backgroundColor: '#121212',
    flex: 1,
  },
  parallaxView: {
    position: 'absolute',
    backgroundColor: '#000',
    width: window.width,
    height: window.height,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    width: window.width,
    backgroundColor: 'rgba(0,0,0,.6)',
    height: PARALLAX_HEADER_HEIGHT,
  },
  header: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 5,
    left: 0,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default playlistStyles;
