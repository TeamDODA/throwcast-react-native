import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './playlistEntryStyles';

const PlaylistEntry = ({ title, artist }) => (
  <View style={styles.box}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.artist}>{artist}</Text>
  </View>
);

export default PlaylistEntry;
