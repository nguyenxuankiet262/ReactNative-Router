/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View, Text,Button, Image
} from 'react-native';

export default class Home extends React.Component{
	  render() {
	  	const {navigate} = this.props.navigation;
	    return (
	      <View style = {{justifyContent:'center',alignItems:'center', flex:1, backgroundColor:'white'}}>
	      	<Image
		        style={{width: 50, height: 50}}
		        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        	/>
        	<Image
        		source={require('../../images/icon_hot.png')}
        	/>
	      	<Text>Home</Text>
	      	<Button style = {{backgroundColor: 'green'}}
	      		onPress ={() => navigate('UserScreen',{name:'Kiet'})}
	      		title = "Go to Next"/>
	      </View>
	      
	    );
	  }
}

