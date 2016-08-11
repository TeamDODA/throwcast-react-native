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
import styles from './styles';

class Player extends Component {
  render() {
    let pP;
    const tP = this.props.actions.togglePlay;
    if (this.props.player.playing) {
      pP = <Icon onPress={tP} style={styles.play} name="ios-pause" size={50} color="#fff" />;
    } else {
      pP = <Icon onPress={tP} style={styles.play} name="ios-play" size={50} color="#fff" />;
    }

    return (
      <View style={styles.container}>
        <Video
          source={{ uri: this.props.player.currentPodcast.uri }}
          ref="audio"
          volume={1.0}
          muted={false}
          paused={!this.props.player.playing}
          resizeMode="cover"
          repeat={false}
          onProgress={this.props.actions.onProgress}
          onLoad={this.props.actions.onLoad}
        />
        <View style={styles.timeInfo}>
          <Text style={styles.time}>
            {formattedTime(this.props.player.currentTime)}
          </Text>
          <Text style={styles.timeRight}>
            -{formattedTime(this.props.player.duration - this.props.player.currentTime)}
          </Text>
        </View>
        <View style={styles.controller}>
          {pP}
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
