import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableHighlight,
} from 'react-native';
import s from './entryStyles';

const PlaylistEntry = ({ entry }) => (
  <TouchableHighlight>
    <View style={s.box}>
      <Image source={{ uri: entry.imageUrl, height: 180 }} />
      <Text style={s.title}>{entry.title}</Text>
      <Text style={s.description}>{entry.description}</Text>
    </View>
  </TouchableHighlight>
);

export default PlaylistEntry;