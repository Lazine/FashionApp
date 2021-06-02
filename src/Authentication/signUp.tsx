/* eslint-disable no-useless-escape */
import React, { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Container, Button, Box, Text } from '../component';
import { StackNavigationProps, Routes } from '../component/Navigation';

// import SocialLogin from './components/socialLogin';
import TextInput from './components/form/textInput';
import CheckBox from './components/form/checkBox';
import Footer from './components/footer';

interface SignUpProps {
  subTitle: string;
  info: string;
  last?: boolean;
  onPress: () => void;
  goBack: () => void;
}

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref('password')], "Passwords don't match")
    .required('Required'),
});

const emailValidator = (email: string) =>
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/.test(
    email
  );

const passwordValidator = (password: string) => password.length > 6;

const SignUp = ({ navigation }: StackNavigationProps<Routes, 'SignUp'>) => {
  
  const {
          handleChange,
          handleBlur,
          handleSubmit, 
          errors,
          touched,
          values,
          setFieldValue,
        } = useFormik({
          validationSchema:SignUpSchema,
          initialValues:{ email: '', password: '', passwordConfirmation: '', remember: true },
          onSubmit:(values) => console.log(values),
        });

  const password = useRef<typeof TextInput>(null);
  const passwordConfirmation = useRef<typeof TextInput>(null);

  const footer = (
    <Footer 
      title= "Already have an account ?" 
      action="Login Here" 
      onPress={() => navigation.navigate('Login')} 
    />
  );

  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Create account
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Let us know what your name, email, and your password.
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
                autoCompleteType="email"
                autoCapitalize="none"
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
                autoCompleteType="password"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
                onSubmitEditing={() => passwordConfirmation.current?.focus()}
              />
            </Box>
            <Box marginBottom="m">
              <TextInput
                ref={password}
                icon="lock"
                placeholder="Confirm your Password"
                secureTextEntry={true}
                onChangeText={handleChange('passwordConfirmation')}
                onBlur={handleBlur('passwordConfirmation')}
                error={errors.passwordConfirmation}
                touched={touched.passwordConfirmation}
                autoCompleteType="password"
                autoCapitalize="none"
                returnKeyType="go"
                returnKeyLabel="go"
                onSubmitEditing={() => handleSubmit()}
              />
            </Box>
            {/* <Box alignItems="center" marginTop="s">
              <Button
                variant="primary"
                label="Log into your account"
                onPress={handleSubmit}
              />
            </Box> */}
          </Box>
      </Box>
    </Container>
  );
};


export default SignUp;
