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

import PlayerSmallRemote from '../../components/playerSmallRemote';
import QueueEntry from './QueueEntry';
import { actions as bMActions } from '../baseModal';
import { actions as qActions } from './';
import { actions as pActions } from '../../modules/player';
import { actions as sActions } from '../../modules/subscription';
import s from './queueStyles';

const window = Dimensions.get('window');
const PARALLAX_HEADER_HEIGHT = 280;
const STICKY_HEADER_HEIGHT = 50;
const addSubs = {
  name: 'md-checkbox',
  size: 30,
};

class Queue extends Component {
  addSubscription() {
    const { subscriptions, queue, actions } = this.props;
    let updated = false;
    subscriptions.list.forEach((station, index) => {
      if (station._id === queue._id) {
        subscriptions.list.splice(index, 1);
        updated = true;
      }
    });
    if (!updated) {
      subscriptions.list.push(queue._id);
    }
    actions.updateSubscriptions(subscriptions.list);
  }

  renderStickyHeader() {
    const { queue, subscriptions } = this.props;
    let pickColor = '#FFF';
    subscriptions.list.forEach(station => {
      if (station._id === queue._id) {
        pickColor = 'purple';
      }
    });
    return (
      <TouchableHighlight onPress={() => this.addSubscription()}>
        <View style={s.stickySection}>
          <Text style={s.stickySectionTitle}>{queue.title}</Text>
          <View style={s.addSubs}>
            <Icon {...addSubs} color={pickColor} onPress={() => this.addSubscription()} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  renderForeground() {
    const { queue, subscriptions } = this.props;
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
          <Icon {...addSubs} color={pickColor} onPress={() => this.addSubscription()} />
        </View>
      </View>
    );
  }

  renderBackground() {
    const { queue } = this.props;
    const imageSource = {
      uri: queue.image,
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
          <View style={s.background}>
            {podcastList.map((podcast, index) =>
              <QueueEntry
                key={index}
                index={index}
                queue={queue}
                podcast={podcast}
                player={player}
                selectPodcast={actions.selectPodcast}
                selectPodcastToAdd={actions.selectPodcastToAdd}
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
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign(bMActions, qActions, pActions, sActions), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Queue);
