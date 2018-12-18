/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
	createStackNavigator,
	createAppContainer,
	createBottomTabNavigator,
} from 'react-navigation';
import Home from './screen/Home';
import User from './screen/User';
import Detail from './screen/Detail';
import Menu from './screen/Menu'

const HomeStack = createStackNavigator({
  HomeScreen: {
  	screen: Home,
  	navigationOptions:{
		title:'Home'
	}
  },
  UserScreen: {
  	screen: User
  }
});

const DetailStack = createStackNavigator({
  DetailScreen: {
  	screen: Detail,
  	navigationOptions:{
		title:'Detail'
	}
  },
  MenuScreen:{
  	screen:Menu,
  	navigationOptions:{
		title:'Menu'
	}
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    DetailStack
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const Tabbar = createAppContainer(TabNavigator);

export default Tabbar;

