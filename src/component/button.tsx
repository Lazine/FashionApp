/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useTheme } from '@shopify/restyle';
import { Theme, Text } from './theme';

const { width, height } = Dimensions.get('screen');

// const restyleFunction = [ color, backgroundColor];

interface SubSliderProps {
  variant: 'primary' | 'default' | 'transparent';
  label: string;
  onPress: () => void;
}

const Button = ({ variant, label, onPress }: SubSliderProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'transparent'
        ? 'transparent'
        : theme.colors.body;

  const color =
    variant === 'primary' ? theme.colors.white : theme.colors.button;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: 'default' };

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    height: 50,
    width: 245,
  },
  // label: {
  //   fontSize: 15,
  //   fontFamily: 'SFProText-Semibold',
  //   color: '#0c0d34',
  //   textAlign: 'center',
  // },
});

export default Button;
