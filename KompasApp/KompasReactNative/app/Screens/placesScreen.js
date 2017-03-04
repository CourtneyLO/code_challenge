'use strict';

import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

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
     if (!this.state.loaded) {
       return this.renderLoadingView();
     }
     return (
       <ListView
         dataSource={this.state.dataSource}
         renderRow={this.renderPlace}
         style={styles.listView}
       />
     );
   },

   renderLoadingView: function() {
     return (
       <View style={styles.container}>
         <Text>
           Loading places...
         </Text>
       </View>
     );
   },

   renderPlace: function(place) {
     return (
       <View style={styles.container}>
         <View style={styles.rightContainer}>
           <Text style={styles.text}>{place.name} {place.city} {place.address} { place.type}  {place.rating}</Text>
         </View>
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
   rightContainer: {
     flex: 1,
   },
   listView: {
     paddingTop: 20,
     backgroundColor: '#F5FCFF',
   },
 });


module.exports = placeScreen
