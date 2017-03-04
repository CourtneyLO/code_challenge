import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import userScreen from './usersScreen';
import placeScreen from './placesScreen';

export default class HomePage extends Component {

  _navigateToUsers() {
  	this.props.navigator.push({
    	name: 'userScreen'
    })
  }

  _navigateToPlaces() {
  	this.props.navigator.push({
    	name: 'placeScreen'
    })
  }

  render() {
     return (
       <View style={ styles.container }>
      <TouchableHighlight style={ styles.button } onPress={ () => this._navigateToUsers() }>
        <Text style={ styles.buttonText }>Users</Text>
      </TouchableHighlight>
      <Text>{"\n"}</Text>
      <Text style={ styles.heading }>Kompas</Text>
      <Text>{"\n"}</Text>
     <TouchableHighlight style={ styles.button } onPress={ () => this._navigateToPlaces() }>
       <Text style={ styles.buttonText }>Places</Text>
     </TouchableHighlight>
      </View>
   );
  }
}

  var styles = StyleSheet.create({
  container: {
    flex: 1,
   	marginTop: 110
  },
   heading: {
    fontWeight: 'bold',
    textAlign: 'center',
  	fontSize:30,
    marginTop:50,
    marginBottom:50
  },
  button: {
  	height:40,
    borderColor: 'white',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
  	fontSize:25,
    color: 'black'
  }
});
