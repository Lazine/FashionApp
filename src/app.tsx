/*
 * @format
 * @flow strict-local
 */

import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding, Welcome } from './Authentication';
import { LoadAssets, theme } from './component';
import { ThemeProvider, createBox, createText } from '@shopify/restyle';

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
          name='Onboarding' 
          component={Onboarding} 
          options={{headerShown:false}}/>
        <AuthenticationStack.Screen 
          name='Welcome' 
          component={Welcome} 
          options={{headerShown:false}}/>
      </AuthenticationStack.Navigator>
  );
};

const App = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
};

export default App;
