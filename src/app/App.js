import { Scene, Router } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import thunk from 'redux-thunk';
import reducers from './reducers';
import SignIn from '../signin/Signin';
import SignUp from '../signup/Signup';
import Playlist from '../playlist/Playlist';
import { toSignin } from '../signin/signinActions';

const RouterWithRedux = connect()(Router);
const store = createStore(reducers, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <RouterWithRedux>
      <Scene key="root" >
        <Scene key="signin" component={SignIn} type="reset" hideNavBar />
        <Scene key="signup" component={SignUp} hideNavBar direction="vertical" />
        <Scene
          key="playlist"
          component={Playlist}
          hideNavBar={false}
          backTitle="Log out"
          onBack={() => store.dispatch(toSignin())}
        />
      </Scene>
    </RouterWithRedux>
  </Provider>
);

export default App;
