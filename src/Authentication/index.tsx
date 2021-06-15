import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../component/Navigation';

import Onboarding, { assets as OnBoardingAssets } from './onboarding';
import Welcome, { assets as WelcomeAssets } from './welcome';
import Login from './login';
import SignUp from './signUp';
import ForgotPassword from './forgotPassword';
import PasswordChanged from './passwordChanged';
// export { default as Onboarding } from './onboarding';
// export { default as Welcome } from './welcome';
// export { default as Login } from './login';
export const assets = [...OnBoardingAssets, ...WelcomeAssets];

const AuthenticationStack = createStackNavigator<Routes>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName="SignUp"
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
      <AuthenticationStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <AuthenticationStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <AuthenticationStack.Screen
        name="PasswordChanged"
        component={PasswordChanged}
        options={{ headerShown: false }}
      />
    </AuthenticationStack.Navigator>
  );
};
