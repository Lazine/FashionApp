import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './component/routes';

import Onboarding, { assets as OnBoardingAssets } from './onboarding';
import Welcome, { assets as WelcomeAssets } from './welcome';
import Login from './login';
export { default as Onboarding } from './onboarding';
export { default as Welcome } from './welcome';
export { default as Login } from './login';
export const assets = [...OnBoardingAssets, ...WelcomeAssets];

const AuthenticationStack = createStackNavigator<Routes>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <AuthenticationStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <AuthenticationStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <AuthenticationStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </AuthenticationStack.Navigator>
  );
};
