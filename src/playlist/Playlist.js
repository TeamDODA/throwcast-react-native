import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import {
  View,
} from 'react-native';
import * as actionCreators from './playlistActions';
import styles from './playlistStyles';
import PlaylistEntry from './PlaylistEntry';

const Playlist = ({ playlist }) => (
  <View style={styles.container}>
    {playlist.map((podcast) =>
      <PlaylistEntry
        key={podcast.id}
        {...podcast}
      />
    )}
  </View>
);

const mapStateToProps = (state) => ({
  playlist: state.playlist.podcastList,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
