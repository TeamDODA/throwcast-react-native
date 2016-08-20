import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import { actions as playlistActions } from '../../modules/playlist';
import { actions as subscriptionActions } from '../../modules/subscription';
import { getQueue } from '../queue/queueActions';
import ListEntry from '../homepage/ListEntry';
import PlayerSmallRemote from '../../components/playerSmallRemote';
import s from './profileStyles';

class Profile extends Component {
  componentWillMount() {
    const { actions } = this.props;
    actions.getPlaylists();
    actions.getSubscriptions();
  }

  render() {
    const { actions, playlists } = this.props;
    return (
      <View style={s.outerContainer}>
        <ScrollView>
          <View style={s.innerContainer}>
            <Text style={s.listTitle}>Subscriptions</Text>
            <View style={s.scrollContainer}>
              <ScrollView automaticallyAdjustContentInsets={false} horizontal>
                {playlists.list.map((entry) =>
                  <ListEntry key={entry._id} {...actions} entry={entry} type="subscriptions" />
                )}
              </ScrollView>
            </View>
            <Text style={s.listTitle}>My playlists</Text>
            <View style={s.scrollContainer}>
              <ScrollView automaticallyAdjustContentInsets={false} horizontal>
                {playlists.list.map((entry) =>
                  <ListEntry key={entry._id} {...actions} entry={entry} type="playlist" />
                )}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
        <View style={s.header}>
          <Text style={s.headerTitle}>MY PROFILE</Text>
        </View>
        <View style={s.footer}>
          <PlayerSmallRemote />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  stations: state.station,
  playlists: state.playlist,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign(
    {},
    { getQueue },
    subscriptionActions,
    playlistActions
  ), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
