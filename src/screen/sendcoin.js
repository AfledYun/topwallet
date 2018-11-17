import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SendCoinScreen extends Component {
  static navigationOptions =({navigation}) => ({
    title: '코인/토큰 보내기'
  });

  render() {
    return (
      <View style={{padding: 5}}>
        <Text>코인/토큰 보내기</Text>
      </View>
    );
  }
}

export default SendCoinScreen;
