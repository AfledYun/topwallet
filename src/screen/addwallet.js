import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, AsyncStorage, Alert } from 'react-native';
import { HDNode, utils, Wallet } from 'ethers';
import LoadingSpinner from 'react-native-loading-spinner-overlay';

class AddWalletScreen extends Component {
  static navigationOptions =({navigation}) => ({
    title: '지갑 생성하기'
  });

  componentWillMount() {
    this.setState({
      loading: false,
      showResult: false});
  }

  render() {
    return (
      <View style={{padding: 5}}>
        <Text style={{textAlign: 'center', margin: 5}}>새로운 지갑을 생성합니다.</Text>
        <Button onPress={() => this.generateNewWallet()} title="만들기"/>
        <LoadingSpinner visible={this.state.loading} textContent="새로운 지갑을 생성하고 있습니다." textStyle={styles.loadingText}/>
        {this.renderNewWallet()}
      </View>
    );
  }

  renderNewWallet() {
    if(this.state.showResult) {
      const { mnemonic, privateKey, address } = this.state;

      return (
        <View style={{marginTop: 5}}>
          <Text style={styles.resultLabel}>니모닉 단어</Text>
          <Text style={styles.resultText} selectable={true}>{mnemonic}</Text>
          <Text style={styles.resultLabel}>개인키</Text>
          <Text style={styles.resultText} selectable={true}>{privateKey}</Text>
          <Text style={styles.resultLabel}>지갑주소</Text>
          <Text style={styles.resultText} selectable={true}>{address}</Text>
          <View style={{marginBottom: 10}}/>
          <Button onPress={() => this.saveWallet()} title="저장하기"/>
        </View>
      );
    }

    return null;
  }

  generateNewWallet() {
    this.setState({loading: true});

    setTimeout(() => {
      const mnemonic = HDNode.entropyToMnemonic(utils.randomBytes(16));
      const wallet = Wallet.fromMnemonic(mnemonic);

      this.setState({
        mnemonic: mnemonic,
        privateKey: wallet.privateKey,
        address: wallet.address,
        loading: false,
        showResult: true});
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
  resultLabel: {
    color: '#808080',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 2
  },
  resultText: {
    textAlign: 'center'
  }
});

export default AddWalletScreen;
