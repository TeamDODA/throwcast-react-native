import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');
const PARALLAX_HEADER_HEIGHT = 280;
const STICKY_HEADER_HEIGHT = 50;

const queueStyles = StyleSheet.create({
  addSubs: {
    top: 10,
    position: 'absolute',
    right: 26,
  },
  addSubs2: {
    top: 240,
    position: 'absolute',
    right: 26,
  },
  background: {
    backgroundColor: '#121212',
    flex: 1,
    height: window.height,
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    width: window.width,
    backgroundColor: 'rgba(0,0,0,.6)',
    height: PARALLAX_HEADER_HEIGHT,
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
  stickySection: {
    flexDirection: 'row',
    height: STICKY_HEADER_HEIGHT,
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stickySectionTitle: {
    flexDirection: 'row',
    color: '#FFF',
    fontSize: 18,
  },
  backButton: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 10,
    paddingLeft: 20,
  },
  parallaxHeader: {
    alignItems: 'center',
    paddingTop: 40,
    width: window.width,
  },
  queueTitle: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Helvetica Neue',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default queueStyles;
