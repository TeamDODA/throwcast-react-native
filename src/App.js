import { Scene, Router, Actions } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import store from 'react-native-simple-store';
import React, { Component } from 'react';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { SignIn, SignUp } from './components';
import { Homepage, Player, Playlist } from './containers';
import { actions as authActions } from './modules/auth';

const RouterWithRedux = connect()(Router);
const reduxStore = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  componentWillMount() {
    StatusBar.setHidden(true, 'none');
    store.get('@Auth:token').then(token => {
      if (token) {
        reduxStore.dispatch(authActions.authSuccess(token));
        Actions.homepage();
      }
    });
  }
  render() {
    return (
      <Provider store={reduxStore}>
        <RouterWithRedux>
          <Scene key="root" >
            <Scene key="signIn" component={SignIn} type="reset" hideNavBar />
            <Scene key="signUp" component={SignUp} hideNavBar direction="vertical" />
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
