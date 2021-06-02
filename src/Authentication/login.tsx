/* eslint-disable no-useless-escape */
import React, { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Container, Button, Box, Text } from '../component';
import { StackNavigationProps, Routes } from '../component/Navigation';

import SocialLogin from './components/socialLogin';
import TextInput from './components/form/textInput';
import CheckBox from './components/form/checkBox';
import Footer from './components/footer';

interface LoginProps {
  subTitle: string;
  info: string;
  last?: boolean;
  onPress: () => void;
  goBack: () => void;
}

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const emailValidator = (email: string) =>
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/.test(
    email
  );

const passwordValidator = (password: string) => password.length > 6;

const Login = ({ navigation }: StackNavigationProps<Routes, 'Login'>) => {
  
  const {
          handleChange,
          handleBlur,
          handleSubmit, 
          errors,
          touched,
          values,
          setFieldValue,
        } = useFormik({
          validationSchema:LoginSchema,
          initialValues:{ email: '', password: '', remember: true },
          onSubmit:(values) => console.log(values),
        });

  const password = useRef<typeof TextInput>(null);

  const footer = (
    <Footer 
      title= "Don't have an account ?" 
      action="Sign Up Here" 
      onPress={() => navigation.navigate('SignUp')} 
    />
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

            <Box>
              <Box marginBottom="m">
                <TextInput
                  icon="mail"
                  placeholder="Enter your Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={errors.email}
                  touched={touched.email}
                  autoCapitalize="none"
                  autoCompleteType="email"
                  returnKeyType="next"
                  returnKeyLabel="next"
                  onSubmitEditing={() => password.current?.focus()}
                /> 
              </Box>
              <Box marginBottom="m">
                <TextInput
                  ref={password}
                  icon="lock"
                  placeholder="Enter your Password"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  error={errors.password}
                  touched={touched.password}
                  autoCapitalize="none"
                  autoCompleteType="password"
                  returnKeyType="go"
                  returnKeyLabel="go"
                  onSubmitEditing={() => handleSubmit()}
                />
              </Box>

              <Box flexDirection="row" justifyContent="space-between">
                <CheckBox
                  label="Remember me"
                  checked={values.remember}
                  onChange={() => setFieldValue('remember', !values.remember)}
                />
                <Button variant="transparent" onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text color="primary">Forgot password</Text>
                </Button>
              </Box>
              <Box alignItems="center" marginTop="s">
                <Button
                  variant="primary"
                  label="Log into your account"
                  onPress={handleSubmit}
                />
              </Box>
            </Box>

      </Box>
    </Container>
  );
};

export default Login;
