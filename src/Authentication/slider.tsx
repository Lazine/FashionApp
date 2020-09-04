/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
export const SLIDER_HEIGHT = 0.61 * height;

interface SliderProps {
  title: string;
  right?: boolean | number;
}

const Slider = ({ title, right } : SliderProps) => {
  const transform = [
    { translateY: ( SLIDER_HEIGHT - 100) / 2  },
    { translateX: right ? width / 2 - 50 : - width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' }
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, {transform}]}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width,
    // height,
  },
  titleContainer: {
    // backgroundColor: '#3da',
    height: 100,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: 'SFProText-Semibold',
    color: '#fff',
    textAlign: 'center',
  }
});


export default Slider;