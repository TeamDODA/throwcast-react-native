import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import {
  View,
} from 'react-native';
import * as actionCreators from './playlistActions';
// import { playlistStyles } from './styles';
import PlaylistEntry from './PlaylistEntry';

const Playlist = ({ playlist }) => (
  <View>
    {playlist.map((podcast) =>
      <PlaylistEntry
        key={podcast.id}
        {...podcast}
      />
    )}
  </View>
);

const mapStateToProps = (state) => ({
  playlist: state.playlist,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
