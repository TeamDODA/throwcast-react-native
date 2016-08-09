import React from 'react';
import {
  Text,
  View,
} from 'react-native';
// import { entryStyles } from './styles';

const PlaylistEntry = (props) => (
  <View>
    <Text>{props.title}</Text>
  </View>
);

export default PlaylistEntry;
