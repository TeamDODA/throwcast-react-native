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

  const defaultImage = 'http://24.media.tumblr.com/tumblr_m3j315A5l31r6luwpo1_500.png';

  return (
    <TouchableHighlight onPress={() => selectPodcast(entry._id, [entry], 0, changePodcast)}>
      <View style={s.box}>
        <Image source={{ uri: entry.image || defaultImage, height: 120 }} />
        <Text ellipsizeMode numberOfLines={1} style={s.title}>{entry.title}</Text>
        <Text ellipsizeMode numberOfLines={1} style={s.description}>{entry.description}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default PodcastEntry;
