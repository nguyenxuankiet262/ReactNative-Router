/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View, Text, Button, TextInput
} from 'react-native';

export default class User extends Component{
	static navigationOptions = ({navigation}) => {
		return{
			title: `${navigation.state.params.name}`
		};
	};
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style = {{flex:1, justifyContent:'center',alignItems:'center'}}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width:150}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          maxLength = {20}
        />
      	<Text>{this.props.navigation.state.params.name}</Text>
      	<Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

