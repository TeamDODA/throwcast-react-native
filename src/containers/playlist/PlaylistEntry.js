import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import s from './playlistEntryStyles';

const PlaylistEntry = ({ player, index, podcast, podcastList, actions }) => {
  let titleStyle;
  let changePodcast = false;
  if (player.podcastList === podcastList && player.currentIndex === index) {
    titleStyle = s.activeTitle;
  } else {
    titleStyle = s.inactiveTitle;
    changePodcast = true;
  }

  return (
    <TouchableHighlight
      style={s.container}
      onPress={() => actions.selectPodcast(podcastList, index, changePodcast)}
    >
      <View style={s.box}>
        <Text style={titleStyle} >{podcast.title}</Text>
        <Text style={s.description}>{podcast.description}</Text>
      </View>
    </TouchableHighlight>
  );
};


export default PlaylistEntry;
