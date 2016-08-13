import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import * as actionCreators from './homepageActions';
import s from './styles';

class Homepage extends Component {
  componentWillMount() {
  }

  render() {
    const { actions } = this.props;
    return (
      <View style={s.container}>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  stations: state.stations,
  podcasts: state.podcasts,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign(actionCreators), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
