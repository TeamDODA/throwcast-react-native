
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import * as podcastActions from '../modules/podcast/podcastActions';
import * as stationActions from '../modules/station/stationActions';

class Homepage extends Component {
  componentWillMount() {
    const { actions } = this.props;
    actions.getPodcasts();
    actions.getStations();
  }

  render() {
    return (
      <View />
    );
  }
}

const mapStateToProps = (state) => ({
  station: state.station,
  podcast: state.podcast,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign(
    {},
    podcastActions,
    stationActions
  ), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
