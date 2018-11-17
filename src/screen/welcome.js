import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

class WelcomeScreen extends Component {
  static navigationOptions =({navigation}) => ({
    title: "",
    headerTransparent: true
  });

  componentDidMount() {
    setTimeout(() => this.gotoMyWallet(), 1000);
  }

  gotoMyWallet() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'MyWallet' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Image source={require('../img/ico-esn.png')} />
      </View>
    );
  }
}

export default WelcomeScreen;
