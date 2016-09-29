import React from 'react';
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import s from './queueEntryStyles';

const QueueEntry = props => {
  const {
    index,
    owner,
    player,
    podcast,
    queue,
    selectPodcast,
    selectPodcastToAdd,
    updatePlaylist,
  } = props;
  let updateButton;
  let titleStyle;
  let changePodcast = false;
  const onPress = () => selectPodcast(queue._id, queue.podcasts, Number(index), changePodcast);
  const addButton = {
    style: s.addButton,
    name: 'md-add',
    size: 30,
    color: '#ff1aff',
  };
  const deleteButton = {
    style: s.addButton,
    name: 'md-remove',
    size: 30,
    color: '#ff1aff',
  };

  if (player.queueId === queue._id && player.currentIndex === index) {
    titleStyle = s.activeTitle;
  } else {
    titleStyle = s.inactiveTitle;
    changePodcast = true;
  }

  if (owner) {
    updateButton = <Icon {...deleteButton} onPress={() => updatePlaylist(queue, podcast, true)} />;
  } else {
    updateButton = <Icon {...addButton} onPress={() => selectPodcastToAdd(podcast)} />;
  }

  return (
    <View style={s.container}>
      <View style={s.box}>
        <TouchableHighlight onPress={onPress}>
          <View style={s.info}>
            <Text numberOfLines={2} style={titleStyle}>{podcast.title}</Text>
            <Text numberOfLines={2} style={s.description}>{podcast.description}</Text>
          </View>
        </TouchableHighlight>
        {updateButton}
      </View>
    </View>
  );
};


export default QueueEntry;
