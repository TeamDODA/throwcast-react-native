import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  Dimensions,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

import { actions as playlistActions } from './';
import { selectPodcast } from '../player/playerActions';
import s from './playlistStyles';
import PlaylistEntry from './PlaylistEntry';

const window = Dimensions.get('window');
const PARALLAX_HEADER_HEIGHT = 280;
const STICKY_HEADER_HEIGHT = 50;

class Playlist extends Component {
  renderStickyHeader() {
    const { playlist } = this.props;
    return (
      <View style={s.stickySection}>
        <Text style={s.stickySectionTitle}>{playlist.title}</Text>
      </View>
    );
  }

  renderForeground() {
    const { playlist } = this.props;
    return (
      <View key="parallax-header" style={s.parallaxHeader}>
        <Text style={s.listTitle}>
          {playlist.title}
        </Text>
      </View>
    );
  }

  renderBackground() {
    const { playlist } = this.props;
    const imageSource = {
      uri: playlist.imageUrl,
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
    const { playlist, player, actions } = this.props;
    const podcastList = playlist.list;
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
              <PlaylistEntry
                key={podcast._id}
                podcast={podcast}
                index={index}
                podcastList={podcastList}
                player={player}
                actions={actions}
              />
            )}
          </View>
        </ParallaxScrollView>
        <View style={s.backButton}>
          <Icon onPress={Actions.pop} name="ios-arrow-back" size={30} color="#FFF" />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.player,
  playlist: state.playlist,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign(playlistActions, { selectPodcast }), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
