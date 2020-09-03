/*
 * @format
 * @flow strict-local
 */

import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from './Authentication/Onboarding';
import LoadAssets from './component/loadasset';

// const fonts = {
//   'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
//   'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
//   'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
// };

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return(
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen 
        name='OnBoarding' 
        component={OnBoarding} 
        options={{headerShown:false}}/>
    </AuthenticationStack.Navigator>
  );
};

const App = () => {
  return (
    <LoadAssets>
      <AuthenticationNavigator />
    </LoadAssets>
  );
};

export default App;
