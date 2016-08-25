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

const FavoriteList = ({ actions, favorite, title, type }) => (
  <View>
    <Text style={s.listTitle}>Favorite {title}</Text>
    <View style={s.scrollContainer}>
      <ScrollView automaticallyAdjustContentInsets={false} horizontal>
        {favorite[type].map((entry) =>
          <ListEntry key={entry._id} {...actions} entry={entry} type="stations" />
        )}
      </ScrollView>
    </View>
  </View>
);

const Profile = ({ actions, favorite, user }) => {
  const props = { actions, favorite };
  return (
    <View style={s.outerContainer}>
      <ScrollView>
        <View style={s.innerContainer}>
          <Text style={s.listTitle}>My Playlists</Text>
          <View style={s.scrollContainer}>
            <ScrollView automaticallyAdjustContentInsets={false} horizontal>
              {user.playlists.map((entry) =>
                <ListEntry key={entry._id} {...actions} entry={entry} type="userPlaylists" />
              )}
            </ScrollView>
          </View>
          {!!favorite.stations.length &&
            <FavoriteList {...props} title="Stations" type="stations" />}
          {!!favorite.playlists.length &&
            <FavoriteList {...props} title="Playlists" type="playlists" />}
          {!!favorite.podcasts.length &&
            <FavoriteList {...props} title="Podcasts" type="podcasts" />}
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

const mapStateToProps = ({ favorite, user }) => ({ favorite, user });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getQueue,
    ...favoriteActions,
    ...playlistActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
