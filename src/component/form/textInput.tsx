import React, { useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { Box, theme } from '../../component/theme';
import { Feather as Icon } from 'react-native-vector-icons/Feather';

interface TextInputProps {
  icon: string;
  placeholder: string;
  validator: (input: string) => boolean;
}

const Valid = true;
const Invalid = false;
const Pristine = null;

type InputState = typeof Valid | typeof Invalid | typeof Pristine;

export const TextInput = ({ icon } : TextInputProps) => {
  
  const [state, setState] = useState<InputState>(Pristine);
  const color = (state === Pristine) ? 'darkGrey' : state === Valid ? 'primary' : 'danger';

  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      borderWidth={1}
      borderColor={color}
    >
      <Box padding="s">
        <Icon name={icon} size={16} {...color} />
      </Box>
      <RNTextInput
        underlineColorAndroid="transparent"
        placeholderTextColor="#151624"
        {...{ placeholder }}
      />
      {(state === Valid || state === Invalid) && (
        <Box height={theme.borderRadii.xl} borderRadius="m">
          <Icon name={state === Valid ? 'check' : 'x'} color="#fff" />
        </Box>
      )}
      <Icon name={'eye'} size={30} color="#151624" />
    </Box>
  );
};

// export default TextInput;
