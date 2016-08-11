import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  controller: {
    flexDirection: 'row',
  },
  play: {
    marginLeft: 50,
    marginRight: 50,
  },
  timeInfo: {
    marginTop: 100,
    flexDirection: 'row',
  },
  time: {
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
});

export default styles;
