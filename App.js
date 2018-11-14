import React from 'react';
import { createStackNavigator } from 'react-navigation';

import WelcomeScreen from './src/screen/welcome';

const App = createStackNavigator({
  Welcome: { screen: WelcomeScreen },
},
{
  initialRouteName: "Welcome",
  cardStyle: { backgroundColor: '#FFFFFF' },
});

export default App;
