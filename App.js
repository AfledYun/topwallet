import React from 'react';
import { createStackNavigator } from 'react-navigation';

import WelcomeScreen from './src/screen/welcome';
import MyWalletScreen from './src/screen/mywallet';
import AddWalletScreen from './src/screen/addwallet';
import ImportWalletScreen from './src/screen/importwallet';
import WalletDetailScreen from './src/screen/welletdetail';
import TransactionsScreen from './src/screen/transactions';
import SendCoinScreen from './src/screen/sendcoin';

const App = createStackNavigator({
  Welcome: { screen: WelcomeScreen },
  MyWallet: { screen: MyWalletScreen },
  AddWallet: { screen: AddWalletScreen },
  ImportWallet: { screen: ImportWalletScreen },
  WalletDetail: { screen: WalletDetailScreen },
  Transactions: { screen: TransactionsScreen },
  SendCoin: { screen: SendCoinScreen },
},
{
  initialRouteName: "Welcome",
  cardStyle: { backgroundColor: '#FFFFFF' },
});

export default App;
