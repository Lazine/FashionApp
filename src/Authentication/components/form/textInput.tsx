/* eslint-disable no-constant-condition */
import React, { useState, forwardRef } from 'react';
import {
  StyleSheet,
  TextInputProps as RNTextInputProps,
  TextInput as RNTextInput,
} from 'react-native';
import { Box, useTheme } from '../../../component';
import Icon from 'react-native-vector-icons/Feather';

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(({ icon, touched, error, ...props }, ref) => {
  const theme = useTheme();
  const reColor = !touched ? 'text' : error ? 'danger' : 'primary';
  const SIZE = theme.borderRadii.m * 2.5;
  const color = theme.colors[reColor];
  return (
    <Box
      flexDirection='row'
      height={48}
      alignItems='center'
      borderRadius='s'
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
      padding='s'
    >
      <Box padding='s'>
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid='transparent'
          placeholderTextColor={color}
          autoCorrect={false}
          {...{ref}}
          {...props}
        />
      </Box>
      {touched && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius='m'
          justifyContent='center'
          alignItems='center'
          backgroundColor={!error ? 'primary' : 'danger'}
          style={{ borderRadius: SIZE / 2 }}
        >
          <Icon
            name={!error ? 'check' : 'x'}
            color='white'
            size={16}
            style={{ textAlign: 'center' }}
          />
        </Box>
      )}
    </Box>
  );
});

export default TextInput;
