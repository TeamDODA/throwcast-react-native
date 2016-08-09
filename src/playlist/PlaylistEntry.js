import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './playlistEntryStyles';

const PlaylistEntry = ({ title }) => (
  <View style={styles.container}>
    <Text>{title}</Text>
  </View>
);

export default PlaylistEntry;
