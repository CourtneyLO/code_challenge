import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Navigator,
  Image,
  TouchableHighlight
} from 'react-native';

import userScreen from './usersScreen';
import placeScreen from './placesScreen';


var homeScreen = React.createClass ({

  _navigateToUsers: function() {
  	this.props.navigator.push({
    	name: 'userScreen'
    })
  },

  _navigateToPlaces: function() {
  	this.props.navigator.push({
    	name: 'placeScreen'
    })
  },

  render: function() {
     return (
       <Image source={require('KompasReactNative/app/img/KompasAppImg.jpg')}
       style={styles.backgroundImage}>

       {this.props.children}
       <View style={ styles.container1 }>

       <TouchableHighlight style={ styles.buttonPlaces }
          onPress={ () => this._navigateToPlaces() }
          underlayColor="white">
         <Text style={ styles.buttonText }>Places</Text>
       </TouchableHighlight>
       </View>

       <View style={ styles.container2 }>
      <TouchableHighlight style={ styles.buttonUsers }
          onPress={ () => this._navigateToUsers() }
          underlayColor="white">
          <Text style={ styles.buttonText }>Users</Text>
      </TouchableHighlight>


      </View>
      </Image>
   );
  }
})

  var styles = StyleSheet.create({
  container1: {
    flex: 1,
   	marginTop: 200
  },
  container2: {
    flex: 1,
   	marginTop: -85
  },
  backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
   heading: {
    fontWeight: 'bold',
    textAlign: 'center',
  	fontSize:30,
    marginTop:50,
    marginBottom:50
  },
  buttonPlaces: {
    height:40,
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonUsers: {
  	height:40,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
  	fontSize:25,
    color: 'black',
  }
});

module.exports = homeScreen
