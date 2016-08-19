import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import s from './entryStyles';

const Entry = ({ _id, title, podcast, list, addToPlaylist }) => (
  <TouchableHighlight
    style={s.container}
    onPress={() => addToPlaylist(_id, podcast)}
  >
    <View style={s.box}>
      <View style={s.info}>
        <Text ellipsizeMode numberOfLines={2} style={s.title}>{title}</Text>
        <Text ellipsizeMode numberOfLines={2} style={s.description}>{list.length} Podcasts</Text>
      </View>
    </View>
  </TouchableHighlight>
);

export default Entry;
