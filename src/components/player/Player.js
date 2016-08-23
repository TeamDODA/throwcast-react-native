import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Video from 'react-native-video';

import { actions as playerActions } from '../../modules/player';

class Player extends Component {
  componentDidMount() {
    this.props.actions.setAudio(this.audio);
  }

  render() {
    const { player, actions } = this.props;
    const index = player.currentIndex;
    const podcast = player.podcastList[index];

    return (
      <View>
        <Video
          source={{ uri: podcast.enclosure.url }}
          ref={c => (this.audio = c)}
          volume={1.0}
          muted={false}
          paused={!player.playing}
          resizeMode="cover"
          onLoad={actions.onLoad}
          onProgress={actions.onProgress}
          onEnd={() => actions.onEnd(index, player.podcastList.length)}
          repeat
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.player,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(playerActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
