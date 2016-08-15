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
import { getPlaylist } from '../playlist/playlistActions';
import Entry from './Entry';
import s from './homepageStyles';


class Homepage extends Component {
  componentWillMount() {
    const { actions } = this.props;
    actions.getPodcasts();
    actions.getStations();
  }

  render() {
    const { stations, podcasts, actions } = this.props;
    return (
      <View style={s.outerContainer}>
        <View style={s.innerContainer}>
          <Text style={s.listTitle}>Stations</Text>
          <View style={s.scrollContainer}>
            <ScrollView automaticallyAdjustContentInsets={false} horizontal>
              {stations.list.map((entry) =>
                <Entry key={entry._id} {...actions} entry={entry} />
              )}
            </ScrollView>
          </View>
          <Text style={s.listTitle}>Popular podcasts</Text>
          <View style={s.scrollContainer}>
            <ScrollView automaticallyAdjustContentInsets={false} horizontal>
              {podcasts.list.map((entry) =>
                <Entry key={entry._id} {...actions} entry={entry} />
              )}
            </ScrollView>
          </View>
        </View>
        <View style={s.header}>
          <Text style={s.headerTitle}>HOME</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  stations: state.station,
  podcasts: state.podcast,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign(
    {},
    { getPlaylist },
    podcastActions,
    stationActions
  ), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
