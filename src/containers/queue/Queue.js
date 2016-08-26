import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableHighlight,
  View,
  ListView,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-spinkit';
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
  name: 'ios-trash',
  size: 35,
};

class Queue extends Component {
  constructor(props) {
    super(props);
    this.renderStickyHeader = this.renderStickyHeader.bind(this);
    this.renderForeground = this.renderForeground.bind(this);
    this.renderBackground = this.renderBackground.bind(this);
  }

  componentWillMount() {
    const { queue, user } = this.props;

    this.favInfo = { localField: queue._id, from: queue.type };
    this.isOwner = queue.owner === user._id;
    this.button = this.isOwner ? deleteButton : favoriteButton;
    this.podcasts = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    }).cloneWithRows(queue.podcasts.splice(0, 30));
  }

  renderStickyHeader() {
    const { actions, favorite, queue } = this.props;
    const isFavorite = _.find(favorite[queue.type], { _id: queue._id });
    const pickColor = (this.isOwner || isFavorite) ? 'purple' : '#FFF';
    let onPress;
    let icon;
    if (favorite.pending) {
      onPress = null;
      icon = <Spinner type="Arc" size={26} color="#FFFFFF" />;
    } else if (this.isOwner && queue.type === 'playlists') {
      onPress = () => actions.deletePlaylist(queue._id);
      icon = <Icon {...this.button} color={pickColor} onPress={onPress} />;
    } else {
      onPress = isFavorite ?
        () => actions.deleteFavorite(this.favInfo) :
        () => actions.addFavorite(this.favInfo);
      icon = <Icon {...this.button} color={pickColor} onPress={onPress} />;
    }
    return (
      <TouchableHighlight onPress={this.onPress}>
        <View style={s.stickySection}>
          <Text style={s.stickySectionTitle}>{queue.title}</Text>
          <View style={s.addSubs}>
            {icon}
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  renderForeground() {
    const { actions, favorite, queue } = this.props;
    const isFavorite = _.find(favorite[queue.type], { _id: queue._id });
    const pickColor = (this.isOwner || isFavorite) ? 'purple' : '#FFF';
    let onPress;
    let icon;
    if (favorite.pending) {
      onPress = null;
      icon = <Spinner type="Arc" size={26} color="#FFFFFF" />;
    } else if (this.isOwner && queue.type === 'playlists') {
      onPress = () => actions.deletePlaylist(queue._id);
      icon = <Icon {...this.button} color={pickColor} onPress={onPress} />;
    } else {
      onPress = isFavorite ?
        () => actions.deleteFavorite(this.favInfo) :
        () => actions.addFavorite(this.favInfo);
      icon = <Icon {...this.button} color={pickColor} onPress={onPress} />;
    }
    return (
      <View key="parallax-header" style={s.parallaxHeader}>
        <Text style={s.queueTitle}>
          {queue.title}
        </Text>
        <View style={s.addSubs2}>
          {icon}
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
    return (
      <View style={s.background}>
        <ParallaxScrollView
          style={s.parallaxView}
          parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
          stickyHeaderHeight={STICKY_HEADER_HEIGHT}
          contentBackgroundColor="#121212"
          renderStickyHeader={this.renderStickyHeader}
          renderForeground={this.renderForeground}
          renderBackground={this.renderBackground}
        >
          <ListView
            dataSource={this.podcasts}
            renderRow={(podcast, si, index) => (
              <QueueEntry
                key={index}
                index={index}
                queue={queue}
                podcast={podcast}
                player={player}
                owner={this.isOwner}
                selectPodcast={actions.selectPodcast}
                selectPodcastToAdd={actions.selectPodcastToAdd}
                updatePlaylist={actions.updatePlaylist}
              />
             )}
          />
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
