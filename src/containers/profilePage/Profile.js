import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ListEntry from '../homepage/ListEntry';
import PlayerSmallRemote from '../../components/playerSmallRemote';
import { actions as playlistActions } from '../../modules/playlist';
import { actions as subscriptionActions } from '../../modules/subscription';
import { getQueue } from '../queue/queueActions';
import s from './profileStyles';

class Profile extends Component {
  componentWillMount() {
    const { actions } = this.props;
    actions.getPlaylists();
    actions.getSubscriptions();
  }

  render() {
    const { actions, playlists, subscriptions } = this.props;
    const userPlaylists = [];
    playlists.list.forEach(entry => {
      if (entry.owner === subscriptions.id) {
        userPlaylists.push(entry);
      }
    });
    return (
      <View style={s.outerContainer}>
        <ScrollView>
          <View style={s.innerContainer}>
            <Text style={s.listTitle}>Subscriptions</Text>
            <View style={s.scrollContainer}>
              <ScrollView automaticallyAdjustContentInsets={false} horizontal>
                {subscriptions.list.map((entry) =>
                  <ListEntry key={entry._id} {...actions} entry={entry} type="stations" />
                )}
              </ScrollView>
            </View>
            <Text style={s.listTitle}>My playlists</Text>
            <View style={s.scrollContainer}>
              <ScrollView automaticallyAdjustContentInsets={false} horizontal>
                {userPlaylists.map((entry) =>
                  <ListEntry key={entry._id} {...actions} entry={entry} type="playlists" />
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
  subscriptions: state.subscription,
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
