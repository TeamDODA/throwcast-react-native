import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    position: 'absolute',
    height: window.height - 80,
    bottom: 0,
  },
  header: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.9)',
    width: window.width,
    alignItems: 'center',
    top: 0,
  },
  headerTitle: {
    marginTop: 20,
    fontFamily: 'Helvetica Neue',
    color: '#FFF',
    fontSize: 12,
  },
  searchContainer: {
    position: 'absolute',
    top: 34,
    width: window.width,
  },
  search: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  inputBox: {
    borderBottomColor: '#202020',
    borderBottomWidth: 2,
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 12,
  },
  input: {
    marginTop: 10,
    height: 30,
    width: 300,
    color: '#FFF',
  },
  searchButton: {
    position: 'absolute',
    right: 30,
    marginTop: 10,
    color: '#ff1aff',
  },
  buttons: {
    position: 'absolute',
    right: 5,
    marginTop: 10,
    marginLeft: 10,
    color: '#FFF',
  },
  load: {
    marginTop: 12,
    marginLeft: 22,
  },
});

export default styles;
