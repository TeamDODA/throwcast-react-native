import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import * as actionCreators from './playerActions';
import styles from './styles';

class Player extends Component {
  render() {
    let pP;
    const tP = this.props.actions.togglePlay;
    if (this.props.player.playing) {
      pP = <Icon onPress={tP} style={styles.play} name="ios-pause" size={70} color="#fff" />;
    } else {
      pP = <Icon onPress={tP} style={styles.play} name="ios-play" size={70} color="#fff" />;
    }

    return (
      <View style={styles.container}>
        <Video
          source={{ uri: 'https://drive.google.com/uc?export=download&id=0Bw8E9Z6qkpq3TTBuSW9vY1lUOVk' }}
          ref="audio"
          volume={1.0}
          muted={false}
          paused={!this.props.player.playing}
          resizeMode="cover"
          repeat={false}
        />
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
