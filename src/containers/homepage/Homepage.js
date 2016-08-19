import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import * as podcastActions from '../../modules/podcast/podcastActions';
import * as stationActions from '../../modules/station/stationActions';
import * as playlistActions from '../../modules/playlist/playlistActions';
import { getQueue } from '../queue/queueActions';
import { selectPodcast } from '../player/playerActions';
import PodcastEntry from './PodcastEntry';
import ListEntry from './ListEntry';
import PlayerSmallRemote from '../../components/playerSmallRemote';
import s from './homepageStyles';


class Homepage extends Component {
  componentWillMount() {
    const { actions } = this.props;
    actions.getPodcasts();
    actions.getStations();
    actions.getPlaylists();
  }

  render() {
    const { stations, podcasts, actions, player, playlists } = this.props;
    return (
      <View style={s.outerContainer}>
        <ScrollView>
          <View style={s.innerContainer}>
            <Text style={s.listTitle}>Stations</Text>
            <View style={s.scrollContainer}>
              <ScrollView automaticallyAdjustContentInsets={false} horizontal>
                {stations.list.map((entry) =>
                  <ListEntry key={entry._id} {...actions} entry={entry} type="stations"/>
                )}
              </ScrollView>
            </View>
            <Text style={s.listTitle}>Popular podcasts</Text>
            <View style={s.scrollContainer}>
              <ScrollView automaticallyAdjustContentInsets={false} horizontal>
                {podcasts.list.map((entry) =>
                  <PodcastEntry
                    key={entry._id}
                    {...actions}
                    entry={entry}
                    player={player}
                  />
                )}
              </ScrollView>
            </View>
            <Text style={s.listTitle}>Popular playlists</Text>
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
          <Text style={s.headerTitle}>HOME</Text>
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
  podcasts: state.podcast,
  player: state.player,
  playlists: state.playlist,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign(
    {},
    { getQueue },
    { selectPodcast },
    podcastActions,
    stationActions,
    playlistActions
  ), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
