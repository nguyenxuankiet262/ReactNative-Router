/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View
} from 'react-native';
import Tabbar from './src/Router.js'; 

export default class App extends Component{
  render() {
    return (
      <View style = {{flex:1}}>
        <Tabbar/>
      </View>
    );
  }
}