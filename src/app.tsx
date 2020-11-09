/*
 * @format
 * @flow strict-local
 */

import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Onboarding,
  Welcome,
  assets as authenticationAssets,
} from './Authentication';
import { LoadAssets, theme } from './component';
import { ThemeProvider, createBox, createText } from '@shopify/restyle';
import { Routes } from './component/routes';

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};

const assets = [...authenticationAssets];

const AuthenticationStack = createStackNavigator<Routes>();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <AuthenticationStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <AuthenticationStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
    </AuthenticationStack.Navigator>
  );
};

const App = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
};

export default App;
