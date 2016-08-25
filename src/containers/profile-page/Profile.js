import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Navbar, PlayerSmallRemote } from '../../components';
import ListEntry from '../homepage/ListEntry';
import { actions as playlistActions } from '../../modules/playlist';
import { actions as favoriteActions } from '../../modules/favorite';
import { getQueue } from '../queue/queueActions';
import s from './profileStyles';

const Profile = props => {
  const { actions, favorite, user } = props;
  return (
    <View style={s.outerContainer}>
      <ScrollView>
        <View style={s.innerContainer}>
          <Text style={s.listTitle}>Subscriptions</Text>
          <View style={s.scrollContainer}>
            <ScrollView automaticallyAdjustContentInsets={false} horizontal>
              {favorite.stations.map((entry) =>
                <ListEntry key={entry._id} {...actions} entry={entry} type="stations" />
              )}
            </ScrollView>
          </View>
          <Text style={s.listTitle}>My playlists</Text>
          <View style={s.scrollContainer}>
            <ScrollView automaticallyAdjustContentInsets={false} horizontal>
              {user.playlists.map((entry) =>
                <ListEntry key={entry._id} {...actions} entry={entry} type="userPlaylists" />
              )}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <View style={s.header}>
        <Navbar />
      </View>
      <View style={s.footer}>
        <PlayerSmallRemote />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  stations: state.station,
  playlists: state.playlist,
  favorite: state.favorite,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getQueue,
    ...favoriteActions,
    ...playlistActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
