import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface SliderProps {
  label: string;
  right?: boolean;
}

const Slider = ({ label, right }: SliderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{label}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleText: {
    fontSize: 80,
    fontFamily: 'SFProText-Semibold',
    color: '#fff',
  }
})


export default Slider;