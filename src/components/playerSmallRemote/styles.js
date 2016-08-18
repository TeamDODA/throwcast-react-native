import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: 36,
    backgroundColor: '#202020',
  },
  sliderContainer: {
    width: window.width,
    marginTop: -3,
  },
  info: {
    marginTop: 4,
    marginLeft: 6,
    width: 270,
  },
  title: {
    color: '#FFF',
    fontFamily: 'HelveticaNeue',
    fontSize: 10,
  },
  description: {
    color: '#BBB',
    fontFamily: 'HelveticaNeue',
    fontSize: 9,
  },
  slider: {
    height: 6,
  },
  sliderTrack: {
    height: 4,
    backgroundColor: '#333',
  },
  sliderThumb: {
    width: 6,
    height: 6,
    backgroundColor: '#FFF',
    borderRadius: 3,
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  controlContainer: {
    flexDirection: 'row',
  },
  play: {
    marginLeft: 15,
    marginRight: 15,
  },
  forward: {
    marginTop: 4,
  },
  rewind: {
    marginTop: 4,
  },
});

export default styles;
