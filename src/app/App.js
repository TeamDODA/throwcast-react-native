import { Scene, Router } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import thunk from 'redux-thunk';
import reducers from './reducers';
import SignIn from '../signin/Signin.js';
import SignUp from '../signup/Signup.js';

const RouterWithRedux = connect()(Router);
const store = createStore(reducers, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <RouterWithRedux>
      <Scene key="root" >
        <Scene key="signin" component={SignIn} type="reset" hideNavBar />
        <Scene key="signup" component={SignUp} hideNavBar direction="vertical" />
      </Scene>
    </RouterWithRedux>
  </Provider>
);

export default App;
