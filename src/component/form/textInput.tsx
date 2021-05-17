/* eslint-disable no-constant-condition */
import React, { useState } from 'react';
import {
  StyleSheet,
  TextInputProps as RNTextInputProps,
  TextInput as RNTextInput,
} from 'react-native';
import { Box, useTheme } from '../../component';
import Icon from 'react-native-vector-icons/Feather';

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}


const TextInput = ({ icon, touched, error, ...props }: TextInputProps) => {
  const theme = useTheme();
  const reColor = !touched ? 'text' : error ? 'danger' : 'primary';
  const SIZE = theme.borderRadii.m * 2;
  const color = theme.colors[reColor];
  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
      padding="s"
    >
      <Box padding="s">
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          autoCorrect={false}
          {...props}
        />
      </Box>
      {touched && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
          backgroundColor={!error ? 'primary' : 'danger'}
        >
          <Icon name={!error ? 'check' : 'x'} color="white" size={16} />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
