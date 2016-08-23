import React from 'react';
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import { actions as navbarActions } from '../../modules/navbar';
import { actions as authActions } from '../../modules/auth';
import s from './styles';

const Navbar = ({ navbar, actions }) => {
  const { active } = navbar;
  const home = active === 'homepage';
  const profile = active === 'profilepage';

  const homeBox = home ? s.activeBox : s.inactiveBox;
  const homePress = actions.toTab.bind(null, 'homepage');
  const homeButton = {
    style: home ? s.activeButton : s.inactiveButton,
    name: 'ios-home',
    size: 26,
    color: '#FFF',
  };

  const profileBox = profile ? s.activeBox : s.inactiveBox;
  const profilePress = actions.toTab.bind(null, 'profilepage');
  const profileButton = {
    style: profile ? s.activeButton : s.inactiveButton,
    name: 'ios-person',
    size: 26,
    color: '#FFF',
  };

  return (
    <View style={s.container}>
      <View style={s.flexRow}>
        <TouchableHighlight onPress={homePress} style={[homeBox, s.box]}>
          <Animatable.View
            animation={home ? 'fadeIn' : ''}
            duration={150}
          >
            <View style={s.flexRow} >
              <Icon {...homeButton} />
              <Text style={s.text}>HOME</Text>
            </View>
          </Animatable.View>
        </TouchableHighlight>
        <TouchableHighlight onPress={profilePress} style={[profileBox, s.box]}>
          <Animatable.View
            animation={profile ? 'fadeIn' : ''}
            duration={150}
          >
            <View style={s.flexRow} >
              <Text style={s.text}>PROFILE</Text>
              <Icon {...profileButton} />
            </View>
          </Animatable.View>
        </TouchableHighlight>
        <TouchableHighlight style={s.smallBox} onPress={actions.toSignIn}>
          <Animatable.View>
            <Icon name="ios-exit" size={26} color="#FFF" style={s.activeButton} />
          </Animatable.View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  navbar: state.navbar,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign(navbarActions, authActions), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
