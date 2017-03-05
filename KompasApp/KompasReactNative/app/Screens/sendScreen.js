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
  TouchableHighlight,
} from 'react-native';

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
            })})
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
                  <TouchableHighlight onPress={this._onPressButtonPOST} style={styles.button}>
                      <Text>POST</Text>
                  </TouchableHighlight>
              </View>
          );
      },
  });
  var styles = StyleSheet.create({
      container: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
      },
      button: {
          backgroundColor: '#eeeeee',
          padding: 10,
          marginRight: 5,
          marginLeft: 5,
      }
  });
module.exports = sendScreen
