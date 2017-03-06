'use strict';

import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry,
  StyleSheet,
  ListView,
  Image,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import homeScreen from './homeScreen';
import userScreen from './usersScreen';

  var REQUEST_URL = 'http://localhost:3000/places';

  var placeScreen = React.createClass({
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
        <Text style= {styles.header}>Places</Text>
        <TouchableHighlight style={ styles.button1 }
          onPress={ () => this._navigateToHome() }
          underlayColor="white">
           <Image style={ styles.imageHome } source={require('KompasReactNative/app/img/home.png')} />
        </TouchableHighlight>
       <ListView
         style={{marginTop: 0}}
         initialListSize={-3}
         dataSource={this.state.dataSource}
         renderRow={this.renderPlace}
         style={styles.listView}
       />
       </View>
     );
   },


   _navigateToHome: function() {
     this.props.navigator.push({
       name: 'homeScreen'
     })
   },

   renderPlace: function(place) {
     return (
       <View style={styles.container}>
         <View style={styles.rightContainer}>
           <Text style={styles.text}>{place.name} { place.type} <Text>{"\n"}</Text> {place.address}, {place.city} <Text>{"\n"}</Text> {place.rating}/10</Text>
         </View>
       </View>
     );
   },
 });

 var styles = StyleSheet.create({
   header: {
     marginTop: 30,
     fontSize: 18,
     textAlign: 'center',
   },
   imageHome: {
     height:15,
     width: 15,
     borderRadius: 10,
     marginLeft: 10
 },
   container: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#eeee',
   },
   rightContainer: {
     flex: 1,
     marginTop: 10,
   },
   listView: {
     paddingTop: 0,
     backgroundColor: '#eeee',
     borderRadius: 10,
   },
   text: {
     fontSize: 8,
     textAlign: 'center'
   }
 });


module.exports = placeScreen
