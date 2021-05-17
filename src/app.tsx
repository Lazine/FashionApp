/*
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { ThemeProvider } from '@shopify/restyle';
// import { createStackNavigator } from '@react-navigation/stack';
import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from './Authentication';
import { LoadAssets } from './component';
import { theme } from './component/theme';
// import { Routes } from './component/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};

const assets = [...authenticationAssets];

const App = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
};

export default App;
