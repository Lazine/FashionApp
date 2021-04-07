/* eslint-disable no-useless-escape */
import React from 'react';
import { Container, Button, Box, Text } from '../../component';
import SocialLogin from './socialLogin';
import TextInput from '../../component/form/textInput';
import CheckBox from '../../component/form/checkBox';

interface LoginProps {
  subTitle: string;
  info: string;
  last?: boolean;
  onPress: () => void;
  goBack: () => void;
}

const emailValidator = (email: string) =>
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/.test(
    email
  );

const passwordValidator = (password: string) => password.length > 6;

const Login = ({navigation}) => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => alert('SignUp!')}>
          <Box flexDirection="row" justifyContent="center">
            <Text variant="button" color="grey" paddingRight="s">
              Do have an account ?
            </Text>
            <Text variant="button" color="primary">
              Sign Up Here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credential below and login to your account
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your Email"
            validator={emailValidator}
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            icon="lock"
            placeholder="Enter your Password"
            secureTextEntry={true}
            validator={passwordValidator}
          />
        </Box>
        <Box flexDirection="row" justifyContent="space-between">
          <CheckBox label="Remember me" />
          <Button variant="transparent" onPress={() => true}>
            <Text color="primary">Forgot password</Text>
          </Button>
        </Box>
        <Box alignItems="center" marginTop="s">
          <Button
            variant="primary"
            label="Log into your account"
            onPress={() => navigation.goBack()}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
