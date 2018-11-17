import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ImportWalletScreen extends Component {
  static navigationOptions =({navigation}) => ({
    title: '지갑 불러오기'
  });

  render() {
    return (
      <View style={{padding: 5}}>
        <Text>지갑 불러오기</Text>
      </View>
    );
  }
}

export default ImportWalletScreen;
