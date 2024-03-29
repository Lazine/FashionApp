import React from 'react';
import { Linking } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Container, Button, Box, Text } from '../component';
import { StackNavigationProps, Routes } from '../component/Navigation';

import TextInput from './components/form/textInput';
import Footer from './components/footer';
import { height } from '../component/theme';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const ForgotPassword = ({
  navigation,
}: StackNavigationProps<Routes, 'ForgotPassword'>) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: ForgotPasswordSchema,
      initialValues: { email: '' },
      onSubmit: () => navigation.navigate('PasswordChanged'),
    }
  );

  const footer = (
    <Footer
      title="Don't work ?"
      action="Try another way"
      onPress={() => Linking.openURL('mailto:help@support.com')}
    />
  );

  return (
    <Container pattern={2} {...{ footer }}>
      <Box padding="xl" justifyContent="center" flex={1}>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Forgot password?
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email address associated with your account
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
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>
        </Box>
        <Box alignItems="center" marginTop="s">
          <Button
            variant="primary"
            label="Reset password"
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
