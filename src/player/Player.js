import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import * as actionCreators from './playerActions';
import { formattedTime } from './utils';
import s from './styles';


class Player extends Component {
  render() {
    const { player, actions } = this.props;
    const { togglePlay, toNextPodcast, toPreviousPodcast } = actions;
    const index = player.currentIndex;
    const prevButton = {
      onPress: index > 0 ? toPreviousPodcast : null,
      style: s.rewind,
      name: 'ios-rewind',
      size: 30,
      color: index > 0 ? '#fff' : '#333',
    };

    const toggleButton = {
      onPress: togglePlay,
      style: s.play,
      name: player.playing ? 'ios-pause' : 'ios-play',
      size: 50,
      color: '#fff',
    };

    const hasNext = index < player.podcastList.length - 1;
    const nextButton = {
      onPress: hasNext ? toNextPodcast : null,
      style: s.forward,
      name: 'ios-fastforward',
      size: 30,
      color: hasNext ? '#fff' : '#333',
    };

    return (
      <View style={s.container}>
        <Video
          source={{ uri: player.podcastList[index].uri }}
          ref='audio'
          volume={1.0}
          muted={false}
          paused={!player.playing}
          resizeMode="cover"
          repeat={false}
          onProgress={actions.onProgress}
          onLoad={actions.onLoad}
        />
        <View style={s.timeInfo}>
          <Text style={s.time}>
            {formattedTime(player.currentTime)}
          </Text>
          <Text style={s.timeRight}>
            {formattedTime(player.duration)}
          </Text>
        </View>
        <View style={s.controller}>
          <Icon {...prevButton} />
          <Icon {...toggleButton} />
          <Icon {...nextButton} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.player,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
