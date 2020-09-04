/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen');

interface SubSliderProps {
  variant: "primary" | "default";
  label: string;
  
}

const Button = ({ variant, label } : SubSliderProps) => {
  const backgroundColor = 
    variant === "primary" ? "#2cb9b0" : " rgba(12, 13, 52, 0.1)";
    const color = variant === "primary" ? "white" : "#0c0b34";

  return (
    <RectButton style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = { variant : "default" };


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    height: 50,
    width: 245,
  },
  label: {
    fontSize: 15,
    fontFamily: 'SFProText-Semibold',
    color: '#0c0d34',
    textAlign: 'center',
  },
  
});


export default Button;