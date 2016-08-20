import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Text,
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
import s from './queueStyles';

const window = Dimensions.get('window');
const PARALLAX_HEADER_HEIGHT = 280;
const STICKY_HEADER_HEIGHT = 50;

class Queue extends Component {
  renderStickyHeader() {
    const { queue } = this.props;
    return (
      <View style={s.stickySection}>
        <Text style={s.stickySectionTitle}>{queue.title}</Text>
      </View>
    );
  }

  renderForeground() {
    const { queue } = this.props;
    return (
      <View key="parallax-header" style={s.parallaxHeader}>
        <Text style={s.queueTitle}>
          {queue.title}
        </Text>
      </View>
    );
  }

  renderBackground() {
    const { queue } = this.props;
    const imageSource = {
      uri: queue.imageUrl,
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
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign(bMActions, qActions, pActions), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Queue);
