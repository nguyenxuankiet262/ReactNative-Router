/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View, Text, Button
} from 'react-native';

export default class Detail extends Component{
  render() {
    const {navigate} = this.props.navigation;
	    return (
	      <View style = {{justifyContent:'center',alignItems:'center', flex:1, backgroundColor:'white'}}>
	      	<Text>Detail</Text>
	      	<Button style = {{backgroundColor: 'green'}}
	      		onPress ={() => navigate('MenuScreen')}
	      		title = "Go to Next"/>
	      </View>
	      
	    );
  }
}

