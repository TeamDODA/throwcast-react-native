import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  box: {
    height: 155,
    width: 120,
    marginLeft: 5,
    backgroundColor: '#151515',
    shadowColor: '#000000',
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  title: {
    marginTop: 2,
    fontSize: 10,
    color: '#FFF',
    fontFamily: 'Helvetica Neue',
  },
  description: {
    marginTop: 1,
    fontSize: 10,
    color: '#909090',
    fontFamily: 'Helvetica Neue',
  },
});

export default styles;
