import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  sliderContainer: {
    width: window.width - 40,
  },
  header: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 30,
    width: window.width,
  },
  image: {
    marginTop: 20,
    marginBottom: 20,
    width: window.width - 40,
    height: 280,
  },
  title: {
    color: '#FFF',
    fontFamily: 'HelveticaNeue',
    marginBottom: 10,
    marginTop: 13,
    fontSize: 20,
  },
  artist: {
    color: '#BBB',
    fontFamily: 'HelveticaNeue',
    fontSize: 14,
    marginBottom: 16,
  },
  slider: {
    height: 20,
  },
  sliderTrack: {
    height: 2,
    backgroundColor: '#333',
  },
  sliderThumb: {
    width: 10,
    height: 10,
    backgroundColor: '#f62976',
    borderRadius: 10 / 2,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  timeInfo: {
    marginTop: 20,
    flexDirection: 'row',
  },
  timeLeft: {
    color: '#FFF',
    flex: 1,
    fontSize: 10,
  },
  timeRight: {
    color: '#FFF',
    textAlign: 'right',
    flex: 1,
    fontSize: 10,
  },
  controlContainer: {
    flexDirection: 'row',
  },
  play: {
    marginLeft: 40,
    marginRight: 40,
  },
  forward: {
    marginTop: 11,
    marginRight: 45,
  },
  rewind: {
    marginTop: 11,
    marginLeft: 45,
  },
});

export default styles;
