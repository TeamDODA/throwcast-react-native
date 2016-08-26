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
import { actions as playlistActions } from '../../modules/playlist';
import s from './styles';

const initial = {
  toggleCreate: false,
  text: '',
};

class AddToPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      toggleCreate: false,
    };
  }

  renderInput() {
    return (
      <Animatable.View animation="fadeInLeft" style={s.inputBox}>
        <TextInput
          style={s.input}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          placeholder="Create New Playlist"
          placeholderTextColor="#ff1aff"
        />
        <Icon
          style={s.buttons}
          name="md-add-circle"
          size={30}
          onPress={() => {
            this.setState(initial);
            this.props.actions.createPlaylist({
              title: this.state.text,
              podcasts: [this.props.playlist.podcast._id],
            });
          }}
        />
        <Icon
          style={s.buttons}
          name="ios-remove-circle"
          size={30}
          onPress={() => this.setState(initial)}
        />
      </Animatable.View>
    );
  }

  renderPlusButton({ fetching }) {
    const icon = fetching ?
      <Spinner type="Arc" size={20} color="#FFFFFF" style={s.load} /> :
      <Icon
        name="md-add"
        size={30}
        color="#fff"
        onPress={() => this.setState({ toggleCreate: true })}
        style={s.addButton}
      />;
    return (
      <Animatable.View animation="bounceIn" style={s.create}>
        {icon}
      </Animatable.View>
    );
  }

  render() {
    const { actions, playlist, user } = this.props;
    return (
      <View style={s.container}>
        <ScrollView style={s.innerContainer}>
          {user.playlists.map((entry, index) =>
            <Entry
              key={index}
              entry={entry}
              podcast={playlist.podcast}
              updatePlaylist={playlist.fetching ? null : actions.updatePlaylist}
            />
          )}
        </ScrollView>
        <View style={s.header}>
          <Text style={s.headerTitle}>ADD TO PLAYLIST</Text>
        </View>
        <View style={s.createContainer}>
          {this.state.toggleCreate ? this.renderInput() : this.renderPlusButton(playlist)}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  playlist: state.playlist,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(playlistActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToPlaylist);
