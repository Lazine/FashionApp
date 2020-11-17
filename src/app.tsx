/*
 * @format
 * @flow strict-local
 */

import * as React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from './Authentication';
import { LoadAssets, theme } from './component';
import { ThemeProvider } from '@shopify/restyle';
import { Routes } from './component/routes';

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
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
};

export default App;
