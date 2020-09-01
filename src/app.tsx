/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const AuthenticationStack = createStackNavigator();

export const AuthenticationNavigator = () => {
  <AuthenticationStack.Navigator>
    <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
  </AuthenticationStack.Navigator>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
};

export default App;
