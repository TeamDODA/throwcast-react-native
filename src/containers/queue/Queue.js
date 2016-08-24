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
import { actions as plActions } from '../../modules/playlist';
import { actions as sActions } from '../../modules/subscription';
import s from './queueStyles';

const backupImage = 'http://cdn.skim.gs/images/Cat-looking-out-window_sy4cxp/25-random-cat-behaviors-finally-explained';
const window = Dimensions.get('window');
const PARALLAX_HEADER_HEIGHT = 280;
const STICKY_HEADER_HEIGHT = 50;
const addSubs = {
  name: 'md-checkbox',
  size: 30,
};

class Queue extends Component {
  toggleSubscription() {
    const { subscriptions, queue, actions } = this.props;
    const subscriptionIds = subscriptions.list.map(subscription => subscription._id);
    if (subscriptionIds.indexOf(queue._id) > -1) {
      actions.updateSubscriptions(_.without(subscriptionIds, queue._id));
    } else {
      actions.updateSubscriptions(subscriptionIds.concat(queue._id));
    }
  }

  renderStickyHeader() {
    const { queue, subscriptions } = this.props;
    const onPress = subscriptions.fetching ? null : () => this.toggleSubscription();
    let pickColor = '#FFF';
    subscriptions.list.forEach(station => {
      if (station._id === queue._id) {
        pickColor = 'purple';
      }
    });
    return (
      <TouchableHighlight onPress={onPress}>
        <View style={s.stickySection}>
          <Text style={s.stickySectionTitle}>{queue.title}</Text>
          <View style={s.addSubs}>
            <Icon {...addSubs} color={pickColor} onPress={onPress} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  renderForeground() {
    const { queue, subscriptions } = this.props;
    const onPress = subscriptions.fetching ? null : () => this.toggleSubscription();
    let pickColor = '#FFF';
    subscriptions.list.forEach(station => {
      if (station._id === queue._id) {
        pickColor = 'purple';
      }
    });
    return (
      <View key="parallax-header" style={s.parallaxHeader}>
        <Text style={s.queueTitle}>
          {queue.title}
        </Text>
        <View style={s.addSubs2}>
          <Icon {...addSubs} color={pickColor} onPress={onPress} />
        </View>
      </View>
    );
  }

  renderBackground() {
    const { queue } = this.props;
    const imageSource = {
      uri: queue.image || backupImage,
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
  subscriptions: state.subscription,
  playlist: state.playlist,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign(
    bMActions, qActions, pActions, sActions, plActions), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Queue);
