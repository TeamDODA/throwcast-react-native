import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import s from './entryStyles';

const defaultImage = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQfWyR7S_wi89O33ITGiHuL2wMVfHfj4I-yAU-i1T0CDRFpo1sxXA';

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
