import React, { Component } from 'react';
import { Button, TouchableOpacity, Text, StyleSheet } from 'react-native';


export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this._onBtnPress = this._onBtnPress.bind(this);
    this._pushToImageList = this._pushToImageList.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Welcome',
    headerRight:
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')} //neu tro ra func ben ngoai thi khong chay dc!?!?
        style={styles.rightBarButton}
      >
        <Text style={styles.barButtonText}>Right</Text>
      </TouchableOpacity>,
    headerLeft:
      <TouchableOpacity
        onPress={() => navigation.navigate('ImageList')}
        style={styles.rightBarButton}
      >
        <Text style={styles.barButtonText}>Left</Text>
      </TouchableOpacity>
  });

  _onBtnPress() {
    const { navigate } = this.props.navigation;
    navigate('Profile', { name: 'Jane' });
  };

  _pushToImageList() {
    this.props.navigation('ImageList');
  }

  render() {
    return (
      <Button
        title="Go to Profile"
        onPress={this._onBtnPress}
      />
    );
  }
}

const styles = StyleSheet.create({
  rightBarButton: {
    backgroundColor: 'red',
    margin: 15,
    padding: 5,
  },

  barButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
