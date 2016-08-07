import { Scene, Router } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import React, { Component } from 'react';
import reducers from './reducers';
import SignIn from '../signin/SignIn.js';

const RouterWithRedux = connect()(Router);
const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="signin" component={SignIn} />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default App;
