import React, { useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Container, Button, Box, Text } from '../../component';
import SocialLogin from './socialLogin';

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" marginTop="m">
        <TouchableWithoutFeedback variant="transparent"  {...{ onPress }}>
          <Text variant="button" color="white">
            <Text>{`${title}`}</Text>
            <Text color="primary">{action}</Text>
          </Text>
        </TouchableWithoutFeedback>
      </Box>
    </>
  );
};

export default Footer;
