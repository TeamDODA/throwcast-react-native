import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import Spinner from 'react-native-spinkit';

import Entry from './Entry';
import { actions as baseModalActions } from '../../containers/base-modal';
import { actions as queueActions } from '../../containers/queue';
import { actions as playerActions } from '../../modules/player';
import { actions as searchActions } from '../../modules/search';
import s from './styles';

const initial = {
  query: '',
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  ComponentWillMount() {
    this.props.actions.searchInit();
  }

  search() {
    const { actions } = this.props;
    const query = { query: this.state.query };
    actions.searchInit();
    actions.search('podcasts', query, 'SEARCH_PODCASTS_SUCC');
    actions.search('playlists', query, 'SEARCH_PLAYLISTS_SUCC');
    actions.search('stations', query, 'SEARCH_STATIONS_SUCC');
    this.setState(initial);
  }

  renderInput() {
    const { search } = this.props;
    const fetching = search.playlistFetching || search.stationFetching || search.podcastFetching;
    const onPress = fetching ? null : this.search.bind(this);
    const icon = fetching ?
      <Spinner type="Arc" size={22} color="#FFFFFF" style={s.load} /> :
      <Icon name="ios-search-outline" size={30} onPress={onPress} style={s.buttons} />;
    return (
      <Animatable.View animation="fadeInLeft" duration={320} style={s.inputBox}>
        <TextInput
          style={s.input}
          onChangeText={(query) => this.setState({ query })}
          value={this.state.query}
          placeholder="Search..."
          placeholderTextColor="#ff1aff"
        />
        {icon}
      </Animatable.View>
    );
  }

  render() {
    const { actions, search } = this.props;
    return (
      <View style={s.container}>
        <ScrollView style={s.innerContainer}>
          {search.podcasts.map((entry, index) =>
            <Entry key={index} entry={entry} {...actions} type="podcast" />
          )}
          {search.playlists.map((entry, index) =>
            <Entry key={index} entry={entry} {...actions} type="playlist" />
          )}
          {search.stations.map((entry, index) =>
            <Entry key={index} entry={entry} {...actions} type="station" />
          )}
        </ScrollView>
        <View style={s.header}>
          <Text style={s.headerTitle}>SEARCH</Text>
        </View>
        <View style={s.searchContainer}>
          {this.renderInput()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...baseModalActions,
    ...queueActions,
    ...playerActions,
    ...searchActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
