import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import s from './entryStyles';

const PodcastEntry = ({ entry, selectPodcast, player }) => {
  let changePodcast = false;
  if (player.queueId !== entry._id) {
    changePodcast = true;
  }
  return (
    <TouchableHighlight onPress={() => selectPodcast(entry._id, [entry], 0, changePodcast)}>
      <View style={s.box}>
        <Image source={{ uri: entry.imageUrl, height: 120 }} />
        <Text ellipsizeMode numberOfLines={1} style={s.title}>{entry.title}</Text>
        <Text ellipsizeMode numberOfLines={1} style={s.description}>{entry.description}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default PodcastEntry;
