import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import s from './entryStyles';

const defaultImage = 'http://24.media.tumblr.com/tumblr_m3j315A5l31r6luwpo1_500.png';

const ListEntry = ({ entry, getQueue, type }) => (
  <TouchableHighlight onPress={() => getQueue(entry, type)}>
    <View style={s.box}>
      <Image source={{ uri: entry.image || defaultImage, height: 120 }} />
      <Text ellipsizeMode numberOfLines={1} style={s.title}>{entry.title}</Text>
      <Text
        ellipsizeMode
        numberOfLines={1}
        style={s.description}
      >
        {type === 'playlists' ? `${entry.podcasts.length} podcasts` :
        entry.description.short || entry.description.long }
      </Text>
    </View>
  </TouchableHighlight>
);

export default ListEntry;
