/* eslint-disable no-useless-escape */
import React from 'react';
import { View } from 'react-native';
import { Container, Button, Box, Text } from '../../component';
import SocialLogin from './socialLogin';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../component/form/textInput';
import CheckBox from '../../component/form/checkBox';

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

const Login = ({ navigation }) => {
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
        <Formik
          validationSchema={LoginSchema}
          initialValues={{ email: '', password: '', remember: true }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
            values,
            setFieldValue,
          }) => (
            <Box>
              <Box marginBottom="m">
                <TextInput
                  icon="mail"
                  placeholder="Enter your Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>
              <Box marginBottom="m">
                <TextInput
                  icon="lock"
                  placeholder="Enter your Password"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  error={errors.password}
                  touched={touched.password}
                />
              </Box>

              <Box flexDirection="row" justifyContent="space-between">
                <CheckBox
                  label="Remember me"
                  checked={values.remember}
                  onChange={() => setFieldValue('remember', !values.remember)}
                />
                <Button variant="transparent" onPress={() => true}>
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
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
