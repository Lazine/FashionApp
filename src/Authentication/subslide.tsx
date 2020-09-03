/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
export const SLIDER_HEIGHT = 0.61 * height;

interface SubSliderProps {
  subTitle: string;
  info: string;
  latest: boolean;
}

const SubSlider = ({ subTitle, info, latest } : SubSliderProps) => {
  // const transform = [
  //   { translateY: ( SLIDER_HEIGHT - 100) / 2  },
  //   { translateX: latest ? width / 2 - 50 : - width / 2 + 50 },
  //   { rotate: latest ? '-90deg' : '90deg' }
  // ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer]}>
        <Text style={styles.titleText}>{subTitle}</Text>
        <Text style={styles.titleText}>{info}</Text>
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
    fontSize: 20,
    lineHeight: 20,
    fontFamily: 'SFProText-Bold',
    color: '#000',
    textAlign: 'center',
  }
});


export default SubSlider;