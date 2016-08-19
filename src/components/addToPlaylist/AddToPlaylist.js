import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';

import { actions as playlistActions } from '../../modules/playlist';
import Entry from './Entry';
import s from './styles';

const AddToPlaylist = ({ playlist, actions }) => (
  <View style={s.container}>
    <ScrollView style={s.innerContainer}>
      {playlist.list.map(entry =>
        <Entry
          key={entry._id}
          {...entry}
          podcast={playlist.podcast}
          addToPlaylist={actions.addToPlaylist}
        />
      )}
    </ScrollView>
    <View style={s.header}>
      <Text style={s.headerTitle}>ADD TO PLAYLIST</Text>
    </View>
  </View>
);

const mapStateToProps = (state) => ({
  playlist: state.playlist,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(playlistActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToPlaylist);
