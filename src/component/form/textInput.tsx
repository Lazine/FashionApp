import React, { useState } from 'react';
import {
  StyleSheet,
  TextInputProps as RNTextInputProps,
  TextInput as RNTextInput,
} from 'react-native';
import { Box, theme } from '../../component';
import Icon from 'react-native-vector-icons/Feather';

interface TextInputProps extends RNTextInputProps {
  icon: string;
}

const SIZE = theme.borderRadii.m * 2;

const TextInput = ({ icon, ...props }: TextInputProps) => {
  const reColor: 'text';
  const color = theme.colors[reColor];
  const onChangeText = (text: string) => {
    setInput(text);
    if (state !== Pristine) {
      validate();
    }
  };
  const validate = () => {
    const valid = validator(input);
    setState(valid);
  };

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
          onBlur={validate}
          {...{ onChangeText }}
          {...props}
        />
      </Box>
      {(state === Valid || state === Invalid) && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
          backgroundColor={state === Valid ? 'primary' : 'danger'}
        >
          <Icon
            name={state === Valid ? 'check' : 'x'}
            color="white"
            size={16}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
