import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import s from './entryStyles';

const defaultImage = 'http://24.media.tumblr.com/tumblr_m3j315A5l31r6luwpo1_500.png';

const ListEntry = ({ entry, getQueue, type }) => {
  let description;
  if (type === 'playlists' || type === 'userPlaylists') {
    description = `${entry.podcasts.length} podcasts`;
  } else {
    description = entry.description ? entry.description.short : entry.description.long;
  }
  return (
    <TouchableHighlight onPress={() => getQueue(entry, type)}>
      <View style={s.box}>
        <Image source={{ uri: entry.image || defaultImage, height: 120 }} />
        <Text ellipsizeMode numberOfLines={1} style={s.title}>{entry.title}</Text>
        <Text ellipsizeMode numberOfLines={1} style={s.description}>
          {description}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default ListEntry;
