import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

import { PlayerSmallRemote } from '../../components';
import QueueEntry from './QueueEntry';
import { actions as bMActions } from '../base-modal';
import { actions as qActions } from './';
import { actions as pActions } from '../../modules/player';
import { actions as fActions } from '../../modules/favorite';
import { actions as plActions } from '../../modules/playlist';
import { DEFAULT_COVER_IMAGE } from '../../constants';
import s from './queueStyles';

const window = Dimensions.get('window');
const PARALLAX_HEADER_HEIGHT = 280;
const STICKY_HEADER_HEIGHT = 50;
const favoriteButton = {
  name: 'md-checkbox',
  size: 30,
};
const deleteButton = {
  name: 'md-remove',
  size: 30,
};

class Queue extends Component {
  renderStickyHeader() {
    const { actions, favorite, queue, user } = this.props;
    const favInfo = { localField: queue._id, from: queue.type };

    const isOwner = queue.owner === user._id;
    const isFavorite = _.find(favorite[queue.type], { _id: queue._id });

    let onPress = favorite.fetching ? null : () => actions.addFavorite(favInfo);

    const pickColor = (isOwner || isFavorite) ? 'purple' : '#FFF';
    const button = isOwner ? deleteButton : favoriteButton;

    if (queue.owner === user._id) {
      onPress = () => actions.deletePlaylist(queue._id);
    }

    return (
      <TouchableHighlight onPress={onPress}>
        <View style={s.stickySection}>
          <Text style={s.stickySectionTitle}>{queue.title}</Text>
          <View style={s.addSubs}>
            <Icon {...button} color={pickColor} onPress={onPress} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  renderForeground() {
    const { actions, favorite, queue, user } = this.props;
    const favInfo = { localField: queue._id, from: queue.type };

    const isOwner = queue.owner === user._id;
    const isFavorite = _.find(favorite[queue.type], { _id: queue._id });

    let onPress = favorite.fetching ? null : () => actions.addFavorite(favInfo);

    const pickColor = (isOwner || isFavorite) ? 'purple' : '#FFF';
    const button = isOwner ? deleteButton : favoriteButton;

    if (queue.owner === user._id) {
      onPress = () => {
        actions.deletePlaylist(queue._id);
        Actions.pop();
      };
    }

    return (
      <View key="parallax-header" style={s.parallaxHeader}>
        <Text style={s.queueTitle}>
          {queue.title}
        </Text>
        <View style={s.addSubs2}>
          <Icon {...button} color={pickColor} onPress={onPress} />
        </View>
      </View>
    );
  }

  renderBackground() {
    const { queue } = this.props;
    const imageSource = {
      uri: queue.image || DEFAULT_COVER_IMAGE,
      width: window.width,
      height: PARALLAX_HEADER_HEIGHT,
    };

    return (
      <View key="background" style={s.background}>
        <Image source={imageSource} />
        <View style={s.backgroundOverlay} />
      </View>
    );
  }

  render() {
    const { queue, player, actions } = this.props;
    const podcastList = queue.podcasts;
    return (
      <View style={s.background}>
        <ParallaxScrollView
          style={s.parallaxView}
          parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
          stickyHeaderHeight={STICKY_HEADER_HEIGHT}
          contentBackgroundColor="#121212"
          renderStickyHeader={() => this.renderStickyHeader()}
          renderForeground={() => this.renderForeground()}
          renderBackground={() => this.renderBackground()}
        >
          <View>
            {podcastList.map((podcast, index) =>
              <QueueEntry
                key={index}
                index={index}
                queue={queue}
                podcast={podcast}
                player={player}
                selectPodcast={actions.selectPodcast}
                selectPodcastToAdd={actions.selectPodcastToAdd}
                updatePlaylist={actions.updatePlaylist}
              />
            )}
          </View>
        </ParallaxScrollView>
        <View style={s.backButton}>
          <Icon onPress={Actions.pop} name="ios-arrow-back" size={30} color="#FFF" />
        </View>
        <View style={s.footer}>
          <PlayerSmallRemote />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.player,
  queue: state.queue,
  favorite: state.favorite,
  playlist: state.playlist,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...bMActions,
    ...qActions,
    ...pActions,
    ...plActions,
    ...fActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Queue);
