/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageRequireSource,
} from 'react-native';
// import { color } from 'react-native-reanimated';
import { Text } from '../../component';

const { width, height } = Dimensions.get('screen');
export const SLIDER_HEIGHT = 0.61 * height;
// export const BORDER_RADIUS = 75;

interface SliderProps {
  title: string;
  right?: boolean | number;
  picture: {
    src: ImageRequireSource;
    width: number;
    height: number;
  };
}

const Slider = ({ title, right }: SliderProps) => {
  const transform = [
    { translateY: (SLIDER_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    // overflow: 'hidden',
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
  },
});

export default Slider;
