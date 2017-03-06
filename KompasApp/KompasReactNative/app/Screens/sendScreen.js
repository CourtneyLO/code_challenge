'use strict';

import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry,
  StyleSheet,
  ListView,
  AlertIOS,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import userScreen from './usersScreen';

var REQUEST_URL = 'http://localhost:3000/send';

var sendScreen = React.createClass({


      _onPressButtonPOST: function() {
          fetch(REQUEST_URL, {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: "Courtney",
              lastName: "Osborn",
              age: 26,
              city: "London"
            })
          })
          .then((response) => response.json())
          .then((responseData) => {
              AlertIOS.alert(
                  "POST Response",
                  responseData.firstName + " " +responseData.lastName + " has been added"
              )
          })
          .done();
      },

      render: function() {
          return (
            <View style={styles.container}>
              <TouchableHighlight style={ styles.buttonHome }
                  onPress={ () => this._navigateToHome() }
                  underlayColor="white">
                  <Image style={ styles.imageHome } source={require('../img/home.png')} />
              </TouchableHighlight>
              <TouchableHighlight style={ styles.buttonUsers }
                  onPress={ () => this._navigateToUsers() }
                  underlayColor="white">
                  <Image style={ styles.imageUser } source={require('../img/user.png')} />
              </TouchableHighlight>
              <Text style= {styles.header}>Add User:</Text>
              <Text style= {styles.name}> Courtney Osborn</Text>
              <TouchableHighlight style={styles.buttonSend}
                  onPress={this._onPressButtonPOST}
                  underlayColor="white">
                  <Text>SEND</Text>
              </TouchableHighlight>
           </View>
          );
      },

      _navigateToHome: function() {
        this.props.navigator.push({
          name: 'homeScreen'
        });
      },

      _navigateToUsers: function() {
        this.props.navigator.push({
          name: 'userScreen'
        });
      },
  });


var styles = StyleSheet.create({
   header: {
     marginTop: 0,
     fontSize: 18,
     textAlign: 'center',
   },
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#eeeeee',
   },
   imageHome: {
     height:15,
     width: 15,
   },
   imageUser: {
     height:15,
     width: 15,
     marginTop: -5,
     alignSelf: 'flex-end'
   },
   buttonSend: {
     backgroundColor: '#C0C0C0',
     padding: 10,
     marginRight: 5,
     marginLeft: 5,
     marginTop: 10,
   },
   buttonUsers: {
     alignSelf: 'center',
     marginLeft: 50,
     marginTop: -10,
     marginBottom: 10,
   },
   buttonHome: {
     marginTop: 0,
     marginRight: 50,
     marginBottom: 0,
      }
});

module.exports = sendScreen;
