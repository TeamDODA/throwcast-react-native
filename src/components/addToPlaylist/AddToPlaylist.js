import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import { actions as playlistActions } from '../../modules/playlist';
import s from './styles';

class AddToPlaylist extends Component {
  render() {
    return (
      <View style={s.container}>
        <View style={s.header}>
          <Text style={s.headerTitle}>ADD TO PLAYLIST</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  playlist: state.playlist,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(playlistActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToPlaylist);
