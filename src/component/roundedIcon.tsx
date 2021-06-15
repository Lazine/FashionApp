import React from 'react';
import { Linking } from 'react-native';
import { Icon } from 'react-native-vector-icons';
import { Theme, Box } from './theme';

interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme['colors'];
  backgroundColor: keyof Theme['colors'];
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
}: RoundedIconProps) => {
  return (
    <Box
      height={size}
      width={size}
      borderRadius="m"
      justifyContent="center"
      alignItems="center"
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}
    >
      <Icon
        color="white"
        size={16}
        style={{ textAlign: 'center' }}
        {...{ name }}
      />
    </Box>
  );
};

export default RoundedIcon;
