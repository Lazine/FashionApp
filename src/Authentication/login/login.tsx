import React, { createRef, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { Container, Button, Box } from '../../component';
import SocialLogin from './socialLogin';

interface LoginProps {
  subTitle: string;
  info: string;
  last?: boolean;
  onPress: () => void;
  goBack: () => void;
}

const emailValidator = (email: string) => {
  // /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
  /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
};

const Login = ({ navigation }) => {
  // const animationVariable = useRef(new Animated.Value(0)).current;

  // const runAnimationOnClick = () => {
  //   scaleValue.current = scaleValue.current === 0 ? 1 : 0;
  //   Animated.spring(animationValue, {
  //     toValue: scaleValue.current,
  //     useNativeDriver: true,
  //   }).start();
  // };

  const footer = (
    <>
      <SocialLogin />
      <Button variant="transparent" onPress={() => alert('SignUp!')}>
        {/* <Box flexDirection="row"> */}
        <Text variant="button" color="grey" paddingRight="s">
          Do have an account ?
        </Text>
        <Text variant="button" color="primary">
          Sign Up Here
        </Text>
        {/* </B ox> */}
      </Button>
    </>
  );
  return (
    <Container {...{ footer }}>
      <Box padding="xl" alignItems="center">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center">
          Use your credential below and login to your account
        </Text>
        <TextInput
          icon="mail"
          placeholder="Enter your Email"
          // validator={emailValidator}
          // value={ref1.current}
          width={300}
          height={45}
          // borderColor="#0c0d34"
          borderWidth={1}
        />
        <TextInput
          icon="mail"
          placeholder="Enter your Email"
          // validator={Value}
          width={300}
          height={45}
          // borderColor="#0c0d34"
          borderWidth={1}
        />
        <Button
          variant="primary"
          label="Have an account? Login"
          onPress={() => navigation.goBack()}
        />
      </Box>
    </Container>
  );
};

export default Login;
