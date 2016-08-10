import {
  View,
} from 'react-native';
import React, { Component } from 'react';
import Video from 'react-native-video';

class Player extends Component {
  render() {
    return (
      <View>
        <Video
          source={{ uri: 'https://drive.google.com/uc?export=download&id=0Bw8E9Z6qkpq3TTBuSW9vY1lUOVk' }}
          ref='audio'
          volume={1.0}
          muted={false}
          paused={false}
          resizeMode="cover"
          repeat={false}
        />
      </View>
    );
  }
}

module.exports = Player;
