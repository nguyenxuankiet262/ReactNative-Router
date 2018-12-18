/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View, Text, Button, StyleSheet, FlatList, Image, RefreshControl
} from 'react-native';

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      refreshing: false,
      page: 1,
    }
  }



  componentDidMount() {
    const url = 'http://192.168.1.4/singer/test.php?trang=0'
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          dataSource: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ padding: 10 }}>
        <Text>{item._ten}</Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: item._hinh }}
        />
      </View>
    )
  }

  loadNewData(){
    this.setState({refreshing: true});
    const url = 'http://192.168.1.4/singer/test.php?trang=0'
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
          page: 1,
          refreshing:false,
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleLoadMore() {
    const url = 'http://192.168.1.4/singer/test.php?trang=' + this.state.page
    setTimeout(() => {
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.length != 0) {
          this.setState({
            dataSource: this.state.dataSource.concat(responseJson),
            page: this.state.page + 1,
          })
        }
        else{
          Alert.alert(
            'THONG BAO',
            'HET DU LIEU!',
            [
              {text: 'OK', onPress: () => console.log('OK')},
            ]
          )
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.loadNewData.bind(this)}
              />
            }
            onEndReached={this.handleLoadMore.bind(this)}
            onEndReachedThreshold={0}
            data={this.state.dataSource}
            renderItem={this.renderItem}
          />
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ margin: 10 }}>Menu</Text>
          <Button
            style={{ margin: 20 }}
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    fontSize: 18,
    height: 20,
  },
})

