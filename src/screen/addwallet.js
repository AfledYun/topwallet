import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AddWalletScreen extends Component {
  static navigationOptions =({navigation}) => ({
    title: '지갑 생성하기'
  });

  render() {
    return (
      <View style={{padding: 5}}>
        <Text>지갑 생성하기</Text>
      </View>
    );
  }
}

export default AddWalletScreen;
