'use strict';

import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  Image,
  View,
  TouchableHighlight,
} from 'react-native';

import homeScreen from './homeScreen';
import sendScreen from './sendScreen';

  var REQUEST_URL = 'http://localhost:3000/users';

var userScreen = React.createClass({

    getInitialState: function() {
     return {
       dataSource: new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2,
       }),
       loaded: false,
     };
   },

   componentDidMount: function() {
     this.fetchData();
   },

   fetchData: function() {
     fetch(REQUEST_URL)
       .then((response) => response.json())
       .then((responseData) => {
         this.setState({
           dataSource: this.state.dataSource.cloneWithRows(responseData),
           loaded: true,
         });
       })
       .done();
   },

   render: function() {
     return (
       <View>
          <Text style= {styles.header}>Users</Text>
          <TouchableHighlight style={ styles.button }
              onPress={ () => this._navigateToHome() }
              underlayColor="white">
              <Image style={ styles.imageUser } source={require('../img/home.png')} />
          </TouchableHighlight>
          <ListView
              style={{marginTop: 0}}
              initialListSize={-3}
              dataSource={this.state.dataSource}
              renderRow={this.renderUser}
              style={styles.listView}
          />
          <TouchableHighlight style={ styles.buttonSend }
              onPress={ () => this._navigateToSend() }
              underlayColor="white">
              <Text style={ styles.buttonSendText }>Add User</Text>
          </TouchableHighlight>
       </View>
     );
   },

   _navigateToHome: function() {
     this.props.navigator.push({
       name: 'homeScreen'
     });
   },

   _navigateToSend: function() {
     this.props.navigator.push({
       name: 'sendScreen'
     });
   },


   renderUser: function(user) {
     return (
       <View>
          <View style={styles.container}>

            <View style={styles.rightContainer}>
              <Text style={styles.text}>{user.firstName} {user.lastName} {user.age} <Text>{"\n"}</Text> {user.city}</Text>
            </View>

          </View>
       </View>
     );
   },
});

var styles = StyleSheet.create({
   header: {
     marginTop: 30,
     fontSize: 20,
     textAlign: 'center',
   },
   container: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#eeee',
     borderRadius: 4,
     borderWidth: 0.5,
     borderColor: '#d6d7da',
   },
   rightContainer: {
     flex: 1,
     marginTop: 7,
   },
   imageHome: {
     height:15,
     width: 15,
     borderRadius: 10,
     marginLeft: 10,
   },
   imageUser: {
     height:15,
     width: 15,
     borderRadius: 10,
     marginLeft: 10,
   },
    buttonSend: {
      marginTop: 10,
    },
    buttonSendText: {
      backgroundColor: '#16197c',
      color: "white",
      fontSize: 20,
      textAlign: 'center',
    },
    text: {
      textAlign: 'center',
      fontSize: 8,
    },
    listView: {
      paddingTop: 10,
      backgroundColor: '#eeee',
      borderRadius: 100,
    }
});


module.exports = userScreen;
