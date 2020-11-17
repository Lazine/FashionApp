import React from 'react';
import { View, Text } from 'react-native';
import { Container, Button } from '../../component';
import theme, { Box } from '../../component/theme';
// import { Box } from '../../component/theme';

interface LoginProps {
  subTitle: string;
  info: string;
  last?: boolean;
  onPress: () => void;
  navigation: () => void;
}

const Login = ({ navigation }) => {


  return (
    <Box flex={1}>
      <Box flex={1}></Box>
      <Button
        variant="primary"
        label="Have an account? Login"
        onPress={() => navigation.goBack()}
      />
    </Box>
  );
};

export default Login;
