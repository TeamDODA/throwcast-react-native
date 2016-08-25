import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import { AddToPlaylist, Player, Search } from '../../components';
import { actions as baseModalActions } from './';
import { actions as searchActions } from '../../modules/search';
import s from './styles';

class BaseModal extends Component {
  renderInner(show, playlistModal, searchModal) {
    const { actions } = this.props;
    const onPress = () => {
      actions.hideModal();
      actions.searchClear(null);
    };

    const downButtonProps = {
      onPress: searchModal ? onPress : actions.hideModal,
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
        {playlistModal ? <AddToPlaylist /> : <Search />}
        <Icon {...downButtonProps} />
      </Animatable.View>
    );
  }

  render() {
    const { baseModal } = this.props;
    const { playlistModal, searchModal } = baseModal;
    const show = playlistModal || searchModal;
    const container = show ? s.showContainer : s.hideContainer;
    const innerContainer = show ? this.renderInner(show, playlistModal, searchModal) : null;
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
  actions: bindActionCreators({
    ...baseModalActions,
    ...searchActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseModal);