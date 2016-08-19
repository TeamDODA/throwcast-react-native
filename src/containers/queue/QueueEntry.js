import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import s from './queueEntryStyles';

const QueueEntry = ({ index, queue, podcast, player, selectPodcast, selectPodcastToAdd }) => {
  let titleStyle;
  let changePodcast = false;
  const addButton = {
    style: s.addButton,
    name: 'md-add',
    size: 30,
    color: '#fff',
  };

  if (player.queueId === queue._id && player.currentIndex === index) {
    titleStyle = s.activeTitle;
  } else if (player.podcastList[player.currentIndex]._id === podcast._id) {
    titleStyle = s.activeTitle;
  } else {
    titleStyle = s.inactiveTitle;
    changePodcast = true;
  }

  return (
    <TouchableHighlight
      style={s.container}
      onPress={() => selectPodcast(queue._id, queue.podcasts, index, changePodcast)}
    >
      <View style={s.box}>
        <View style={s.info}>
          <Text ellipsizeMode numberOfLines={2} style={titleStyle}>{podcast.title}</Text>
          <Text ellipsizeMode numberOfLines={2} style={s.description}>{podcast.description}</Text>
        </View>
        <Icon {...addButton} onPress={() => selectPodcastToAdd(podcast)} />
      </View>
    </TouchableHighlight>
  );
};


export default QueueEntry;
