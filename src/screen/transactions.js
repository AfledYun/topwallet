import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class TransactionsScreen extends Component {
  static navigationOptions =({navigation}) => ({
    title: '거래내역 보기'
  });

  render() {
    return (
      <View style={{padding: 5}}>
        <Text style={{marginBottom: 10}}>거래내역 보기</Text>
        <Button onPress={() => this.props.navigation.navigate('SendCoin')} title="코인/토큰 보내기"/>
      </View>
    );
  }
}

export default TransactionsScreen;
