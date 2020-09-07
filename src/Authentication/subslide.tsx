/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Button from '../component/button';

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
      <Text style={styles.subTitle}>{ subTitle }</Text>
      <Text style={styles.description}>{ info }</Text>
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
  },
  subTitle: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: 'SFProText-Semibold',
    marginBottom: 12,
    color: '#0c0d34',
    textAlign: 'center',
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