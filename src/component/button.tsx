/* eslint-disable react-native/no-color-literals */
import React, { ReactNode } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useTheme } from '@shopify/restyle';
import { theme, Text } from './theme';

const { width, height } = Dimensions.get('screen');

// const restyleFunction = [ color, backgroundColor];

interface ButtonProps {
  variant: 'primary' | 'default' | 'transparent';
  label: string;
  onPress: () => void;
  children?: ReactNode;
}

const Button = ({ variant, label, onPress, children }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'transparent'
      ? 'transparent'
      : theme.colors.grey;

  const color =
    variant === 'primary' ? theme.colors.white : theme.colors.secondary;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      {children ? (
        children
      ) : (
        <Text variant="button" style={{ color }}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};

Button.defaultProps = { variant: 'default' };

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    height: 44,
    width: 245,
    marginBottom: 15,
  },
});

export default Button;
