import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import s from './playlistEntryStyles';

const PlaylistEntry = ({ podcast, index, playlist, selectPodcast }) => (
  <TouchableHighlight
    style={s.container}
    onPress={() => selectPodcast(podcast, playlist, index)}
  >
    <View style={s.box}>
      <Text style={s.title} >{podcast.title}</Text>
      <Text style={s.description}>{podcast.description}</Text>
    </View>
  </TouchableHighlight>
);

export default PlaylistEntry;
