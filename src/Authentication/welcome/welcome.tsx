/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Button from '../../component/button';

const { width, height } = Dimensions.get('screen');
export const SLIDER_HEIGHT = 0.61 * height;

interface WelcomeProps {
  subTitle: string;
  info: string;
  last?: boolean;
  onPress: () => void;
}

const Welcome = ({ subTitle, info, last, onPress } : WelcomeProps) => {
  return (
    <View style={styles.container}>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    borderTopLeftRadius: 75,
  },
});


export default Welcome;