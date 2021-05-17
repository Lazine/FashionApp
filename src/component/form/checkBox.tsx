import React, { useState } from 'react';
import { View } from 'react-native';
import { Box, Text } from '../../component';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}
const CheckBox = ({ label, onChange, checked }: CheckBoxProps) => {
  // const [checked, setChecked] = useState(false);
  return (
    <RectButton
      onPress={() => onChange((c) => !c)}
      style={{ justifyContent: 'center' }}
    >
      <Box flexDirection="row" alignItems="center">
        <Box
          marginRight="s"
          borderRadius="s"
          width={20}
          height={20}
          backgroundColor={checked ? 'primary' : 'white'}
          borderColor="primary"
          borderWidth={2}
          justifyContent="center"
          alignItems="center"
        >
          <Icon name={'check'} color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default CheckBox;
