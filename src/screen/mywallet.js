import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import ActionSheet from 'react-native-actionsheet'
import { IconButton } from './icon-button';

class MyWalletScreen extends Component {
  static navigationOptions =({navigation}) => ({
    title: '내 지갑',
    headerRight: (
      <View style={{marginRight: 5}}>
      <IconButton onPress={() => navigation.getParam('showMenu')() } source={require('../img/ico-menu.png')} />
      </View>
    )
  });

  componentWillMount() {
    this.props.navigation.setParams({showMenu: () => this.ActionSheet.show()});
  }

  render() {
    return (
      <View style={{padding: 5}}>
        <Text style={{marginBottom: 10}}>내 지갑 화면</Text>
        <Button onPress={() => this.props.navigation.navigate('WalletDetail')} title="지갑 상세보기"/>
        <View style={{marginBottom: 10}}/>
    		<Button onPress={() => this.props.navigation.navigate('Transactions')} title="거래내역 보기"/>
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={'메뉴를 선택하세요.'}
          options={['지갑 생성하기', '지갑 불러오기', '취소']}
          cancelButtonIndex={2}
          destructiveButtonIndex={99}
          onPress={(index) => {
            if(index == 0) this.props.navigation.navigate('AddWallet');
            else if(index == 1) this.props.navigation.navigate('ImportWallet');
          }}
        />
      </View>
    );
  }
}

export default MyWalletScreen;
