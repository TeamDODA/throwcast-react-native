import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import s from './entryStyles';

const ListEntry = ({ entry, getQueue, type }) => (
  <TouchableHighlight onPress={() => getQueue(entry, type)}>
    <View style={s.box}>
      <Image source={{ uri: entry.imageUrl, height: 120 }} />
      <Text ellipsizeMode numberOfLines={1} style={s.title}>{entry.title}</Text>
      <Text
        ellipsizeMode
        numberOfLines={1}
        style={s.description}
      >
        {type === 'playlists' ? `${entry.podcasts.length} podcasts` : entry.description}
      </Text>
    </View>
  </TouchableHighlight>
);

export default ListEntry;
