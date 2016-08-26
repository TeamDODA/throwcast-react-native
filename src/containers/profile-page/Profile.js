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
import PodcastEntry from '../homepage/PodcastEntry';
import { actions as playlistActions } from '../../modules/playlist';
import { actions as favoriteActions } from '../../modules/favorite';
import { actions as playerActions } from '../../modules/player';
import { getQueue } from '../queue/queueActions';
import s from './profileStyles';

const FavoriteList = ({ actions, favorite, title, type, player }) => (
  <View>
    <Text style={s.listTitle}>Favorite {title}</Text>
    <View style={s.scrollContainer}>
      <ScrollView automaticallyAdjustContentInsets={false} horizontal>
        {favorite[type].map((entry) => {
          if (type === 'podcasts') {
            return <PodcastEntry key={entry._id} {...actions} entry={entry} player={player} />;
          }
          return <ListEntry key={entry._id} {...actions} entry={entry} type={type} />;
        })}
      </ScrollView>
    </View>
  </View>
);

const Profile = ({ actions, favorite, user, player }) => {
  const props = { actions, favorite, player };
  return (
    <View style={s.outerContainer}>
      <ScrollView>
        <View style={s.innerContainer}>
          <Text style={s.listTitle}>My Playlists</Text>
          <View style={s.scrollContainer}>
            <ScrollView automaticallyAdjustContentInsets={false} horizontal>
              {user.playlists.map((entry) =>
                <ListEntry key={entry._id} {...actions} entry={entry} type="playlists" />
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

const mapStateToProps = ({ favorite, user, player }) => ({ favorite, user, player });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getQueue,
    ...favoriteActions,
    ...playlistActions,
    ...playerActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
