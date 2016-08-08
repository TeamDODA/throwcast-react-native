import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import * as actionCreators from './playlistActions';
import styles from './styles';

const Playlist = () => (
  <View style={styles.container}>
    <Text>Song</Text>
    <Text>Song</Text>
    <Text>Song</Text>
    <Text>Song</Text>
  </View>
);

const mapStateToProps = (state) => ({
  playlist: state.playlist,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
