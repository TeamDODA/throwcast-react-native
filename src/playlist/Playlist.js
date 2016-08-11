import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import * as actionCreators from './playlistActions';
import { selectPodcast } from '../player/playerActions';
import styles from './playlistStyles';
import PlaylistEntry from './PlaylistEntry';

const Playlist = ({ playlist, actions }) => (
  <View style={styles.container}>
    <View style={styles.playlist}>
      <ScrollView>
        {playlist.map((podcast, index) =>
          <PlaylistEntry
            key={podcast.id}
            podcast={podcast}
            index={index}
            playlist={playlist}
            selectPodcast={actions.selectPodcast}
          />
        )}
      </ScrollView>
    </View>
  </View>
);

const mapStateToProps = (state) => ({
  playlist: state.playlist.podcastList,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({selectPodcast, ...actionCreators}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
