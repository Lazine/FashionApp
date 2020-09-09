/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Button, Text } from '../../component';

const { width, height } = Dimensions.get('screen');

export const SLIDER_HEIGHT = 0.61 * height;

interface SubSliderProps {
  subTitle: string;
  info: string;
  last?: boolean;
  onPress: () => void;
}

const SubSlider = ({ subTitle, info, last, onPress } : SubSliderProps) => {
  return (
    <View style={styles.container}>
      <Text variant='title2' style={styles.subTitle}>{ subTitle }</Text>
      <Text variant='body' style={styles.description}>{ info }</Text>
      <Button 
        label={ last ? "Let's get Start!" : "next"} 
        variant={ last ? "primary" : "default"} 
        {...{ onPress }} 
      />
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
    // backgroundColor: 'red',
  },
  subTitle: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: 'SFProText-Semibold',
    color: '#0c0d34',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'SFProText-Regular',
    color: '#0c0d34',
    textAlign: 'center',
    marginBottom: 40,
  }
});


export default SubSlider;