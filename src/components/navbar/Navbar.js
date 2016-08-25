import React, { Component } from 'react';
import {
  Alert,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import { actions as authActions } from '../../modules/auth';
import { actions as baseModalActions } from '../../containers/base-modal';
import { actions as navbarActions } from '../../modules/navbar';
import s from './styles';

class Navbar extends Component {
  renderAlert() {
    const { actions } = this.props;
    return Alert.alert(
      'Log out',
      'Throwing it all away?',
      [
        { text: 'YES', onPress: () => actions.toSignIn() },
        { text: 'Cancel', onPress: null, style: 'cancel' },
      ]
    );
  }

  render() {
    const { navbar, actions } = this.props;
    const { active } = navbar;
    const home = active === 'homepage';
    const profile = active === 'profilepage';

    const homeBox = home ? s.activeBox : s.inactiveBox;
    const homeButton = {
      style: home ? s.activeButton : s.inactiveButton,
      name: 'ios-home',
      size: 26,
      color: '#FFF',
    };

    const profileBox = profile ? s.activeBox : s.inactiveBox;
    const profileButton = {
      style: profile ? s.activeButton : s.inactiveButton,
      name: 'ios-person',
      size: 26,
      color: '#FFF',
    };

    return (
      <View style={s.container}>
        <View style={s.flexRow}>
          <TouchableHighlight style={s.smallBox} onPress={() => actions.showSearchModal()}>
            <Animatable.View>
              <Icon name="ios-search" size={26} color="#FFF" style={s.activeButton} />
            </Animatable.View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => actions.toTab('homepage')} style={[homeBox, s.box]}>
            <Animatable.View animation={home ? 'fadeIn' : ''} duration={150}>
              <View style={s.flexRow} >
                <Icon {...homeButton} />
                <Text style={s.text}>HOME</Text>
              </View>
            </Animatable.View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => actions.toTab('profilepage')}
            style={[profileBox, s.box]}
          >
            <Animatable.View animation={profile ? 'fadeIn' : ''} duration={150}>
              <View style={s.flexRow} >
                <Text style={s.text}>PROFILE</Text>
                <Icon {...profileButton} />
              </View>
            </Animatable.View>
          </TouchableHighlight>
          <TouchableHighlight style={s.smallBox} onPress={() => this.renderAlert()}>
            <Animatable.View>
              <Icon name="ios-exit" size={26} color="#FFF" style={s.activeButton} />
            </Animatable.View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  navbar: state.navbar,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign(authActions, baseModalActions, navbarActions),
    dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
