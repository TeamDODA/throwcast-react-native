import { Scene, Router, Actions } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import store from 'react-native-simple-store';
import React, { Component } from 'react';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Homepage from '../homepage/Homepage';
import SignIn from '../signin/Signin';
import SignUp from '../signup/Signup';
import Playlist from '../playlist/Playlist';
import Player from '../player/Player';
import { signinSuccess } from '../signin/signinActions';

const RouterWithRedux = connect()(Router);
const reduxStore = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  componentWillMount() {
    StatusBar.setHidden(true, 'none');
    store.get('@Auth:token').then(token => {
      reduxStore.dispatch(signinSuccess(token));
      Actions.homepage();
    });
  }
  render() {
    return (
      <Provider store={reduxStore}>
        <RouterWithRedux>
          <Scene key="root" >
            <Scene key="signin" component={SignIn} type="reset" hideNavBar />
            <Scene key="signup" component={SignUp} hideNavBar direction="vertical" />
            <Scene key="homepage" component={Homepage} hideNavBar />
            <Scene key="playlist" component={Playlist} hideNavBar />
            <Scene key="player" component={Player} />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default App;
