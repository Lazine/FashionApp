import React from 'react';
import { Image } from 'react-native';
import { Container, Button, Box, Text, CloseButton } from '../component';
import { StackNavigationProps, Routes } from '../component/Navigation';
import Icon from 'react-native-vector-icons/Feather';

// interface PasswordChangedProps {}
const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, 'PasswordChanged'>) => {
  return (
    <Container
      pattern={1}
      alignSelf="center"
      footer={
        <Box flexDirection="row" justifyContent="center">
          <CloseButton onPress={() => navigation.pop()} />
        </Box>
      }
    >
      <Box padding="xl" justifyContent="center" alignItems="center" flex={1}>
        <Box
          backgroundColor="primaryLight"
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
          justifyContent="center"
          alignItems="center"
          marginBottom="xl"
        >
          <Text color="primary" textAlign="center">
            <Icon name="check" size={32} />
          </Text>
        </Box>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Your password was successfully changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email address associated with your account
        </Text>
        <Box alignItems="center" marginTop="s">
          <Button
            variant="primary"
            label="Login again"
            onPress={() => navigation.navigate('Login')}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
