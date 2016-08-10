import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Player } from 'react-native-audio-streaming';
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
    <Player url={"https://drive.google.com/uc?export=download&id=0Bw8E9Z6qkpq3TTBuSW9vY1lUOVk"} />
  </View>
);

const mapStateToProps = (state) => ({
  playlist: state.playlist.podcastList,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
