import React, { Component } from 'react';
import { View, Image } from 'react-native';

class WelcomeScreen extends Component {
  static navigationOptions =({navigation}) => ({
    title: "",
    headerTransparent: true
  });

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Image source={require('../img/ico-esn.png')} />
      </View>
    );
  }
}

export default WelcomeScreen;
