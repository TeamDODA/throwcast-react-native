import { Scene, Router } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import React, { Component } from 'react';
import reducers from './reducers';
import Test from './components/test';

const RouterWithRedux = connect()(Router);
const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="test" component={Test} />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default App;
