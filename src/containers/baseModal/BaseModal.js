import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import { actions as baseModalActions } from './';
import Player from '../../components/player';
import AddToPlaylist from '../../components/addToPlaylist';
import s from './styles';

class BaseModal extends Component {
  renderInnerContainer(show) {
    const { actions } = this.props;
    const downButtonProps = {
      onPress: actions.hidePlaylistModal,
      style: s.downButton,
      name: 'ios-arrow-down',
      size: 30,
      color: '#fff',
    };
    const AnimatableView = {
      animation: show ? 'fadeInUp' : null,
      duration: 200,
    };
    return (
      <Animatable.View {...AnimatableView} style={s.innerContainer}>
        <AddToPlaylist />
        <Icon {...downButtonProps} />
      </Animatable.View>
    );
  }

  render() {
    const { baseModal } = this.props;
    const show = baseModal.playlistModal;
    const container = show ? s.showContainer : s.hideContainer;
    const innerContainer = show ? this.renderInnerContainer(show) : null;
    return (
      <View style={container}>
        <Player />
        {innerContainer}
      </View>

    );
  }
}

const mapStateToProps = (state) => ({
  baseModal: state.baseModal,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(baseModalActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseModal);
