import React, { Component } from 'react';
import { View, Text } from 'react-native';

class WalletDetailScreen extends Component {
  static navigationOptions =({navigation}) => ({
    title: '지갑 상세보기'
  });

  render() {
    return (
      <View style={{padding: 5}}>
        <Text>지갑 상세보기</Text>
      </View>
    );
  }
}

export default WalletDetailScreen;
