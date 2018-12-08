import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, TextInput, Button, Alert } from 'react-native';
import { HDNode, utils, Wallet } from 'ethers';
import LoadingSpinner from 'react-native-loading-spinner-overlay';

class ImportWalletScreen extends Component {
  static navigationOptions =({navigation}) => ({
    title: '지갑 불러오기'
  });

  componentWillMount() {
    this.setState({
      importValue: '',
      loading: false,
      showResult: false});
  }

  render() {
    return (
      <View style={{padding: 5}}>
        <Text style={{textAlign: 'center', margin: 5}}>기존 지갑을 불러옵니다.</Text>
        <Text style={styles.label}>프라이빗 키 또는 니모닉 단어를 입력하세요.</Text>
        <TextInput style={styles.input} multiline={true} placeholder='프라이빗 키 또는 니모닉 단어'
          onChangeText={(text) => this.setState({importValue: text})}/>
        <Button onPress={() => this.importWallet()} title="불러오기"/>
        <LoadingSpinner visible={this.state.loading} textContent="기존 지갑을 불러오고 있습니다." textStyle={styles.loadingText}/>
        {this.renderImportedWallet()}
      </View>
    );
  }

  renderImportedWallet() {
    if(this.state.showResult) {
      const { address } = this.state;

      return (
        <View style={{marginTop: 5}}>
          <Text style={styles.label}>지갑주소</Text>
          <Text style={styles.resultText} selectable={true}>{address}</Text>
          <View style={{marginBottom: 10}}/>
          <Button onPress={() => this.saveWallet()} title="저장하기"/>
        </View>
      );
    }

    return null;
  }

  importWallet() {
    const { importValue } = this.state;
    this.setState({loading: true});

    const regexp = /^[0-9a-fA-F]+$/;
    const isHex = importValue.substring(0, 2) === '0x' && importValue.length == 66 && regexp.test(importValue.substring(2));

    setTimeout(() => {
      let wallet = null;

      try {
        wallet = isHex ? new Wallet(importValue) : Wallet.fromMnemonic(importValue);
      } catch(error) {
        this.setState({loading: false, showResult: false});
        Alert.alert(null, '잘못 입력하였습니다.', [ {text: '확인'}, ], { cancelable: true });
        return;
      }

      const mnemonic = isHex ? '' : importValue;

      if(wallet) {
        this.setState({
          mnemonic: mnemonic,
          privateKey: wallet.privateKey,
          address: wallet.address,
          loading: false,
          showResult: true});
      }
      else {
        this.setState({loading: false, showResult: false});
        Alert.alert(null, '잘못 입력하였습니다.', [ {text: '확인'}, ], { cancelable: true });
      }
    }, 500);
  }

  saveWallet() {
    const { mnemonic, privateKey, address } = this.state;

    const key = 'Wallet:' + address.toLowerCase();
    const value = address + ':' + privateKey + ':' + mnemonic;

    AsyncStorage.setItem(key, value, (error) => {
      if(error) {
        Alert.alert(null, '지갑을 저장할 수 없습니다.', [ {text: '확인'}, ], { cancelable: true });
      }
      else {
        this.props.navigation.pop();
      }
    });
  }
}

const styles = StyleSheet.create({
  loadingText: {
    color: '#FFF',
    textAlign: 'center',
  },
  label: {
    color: '#808080',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 2
  },
  resultText: {
    textAlign: 'center'
  },
  input: {
    alignSelf: 'stretch',
    textAlign: 'left',
    borderColor: '#d4d4d4',
    borderRadius: 4,
    borderWidth: 1,
    height: 90,
    fontSize: 16,
    textAlignVertical: 'top'
  }
});

export default ImportWalletScreen;
