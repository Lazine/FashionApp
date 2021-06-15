import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Box, Text } from './theme';
import Icon from 'react-native-vector-icons/Feather';

interface CloseButtonProps {
  onPress: () => void;
}

const SIZE = 60;

const CloseButton = ({ onPress }: CloseButtonProps) => {
  return (
    <RectButton {...{ onPress }}>
      <Box
        style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="secondary">
          <Icon name="x" size={45} />
        </Text>
      </Box>
    </RectButton>
  );
};

export default CloseButton;
