import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import styles from './playlistEntryStyles';

const PlaylistEntry = ({ podcast, index, playlist, selectPodcast }) => (
  <TouchableHighlight
    style={styles.container}
    onPress={() => selectPodcast(podcast, playlist, index)}
  >
    <View style={styles.box}>
      <Text style={styles.title} >{podcast.title}</Text>
      <Text style={styles.artist}>{podcast.artist}</Text>
    </View>
  </TouchableHighlight>
);

export default PlaylistEntry;
