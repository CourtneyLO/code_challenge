import React, { Component } from 'react';
import {
  Navigator,
} from 'react-native';

import Home from './Screens/homeScreen';
import Users from './Screens/usersScreen';
import Places from './Screens/placesScreen';

const RouteMapper = (route, navigator) => {
  if (route.name == 'homeScreen') {
    return <Home navigator={navigator}/>;
  }
  if (route.name === 'userScreen') {
    return <Users navigator={navigator} />;
  }
  if (route.name == "placeScreen") {
    return <Places navigator={navigator} />;
  }
};

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'homeScreen' }}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        renderScene={RouteMapper}
      />
    );
  }
}
