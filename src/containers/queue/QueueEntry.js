import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import s from './queueEntryStyles';

const QueueEntry = ({ index, queue, podcast, player, selectPodcast }) => {
  let titleStyle;
  let changePodcast = false;
  if (player.queueId === queue._id && player.currentIndex === index) {
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
        <Text style={titleStyle} >{podcast.title}</Text>
        <Text style={s.description}>{podcast.description}</Text>
      </View>
    </TouchableHighlight>
  );
};


export default QueueEntry;
