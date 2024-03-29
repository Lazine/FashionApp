/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react-native/no-color-literals */
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  // Text,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { Button } from '../component';
import { Box, Text, useTheme } from '../component/theme';
// import theme from '../../component/theme';
import { StackNavigationProps, Routes } from '../component/Navigation';

const { width, height } = Dimensions.get('screen');
export const SLIDER_HEIGHT = 0.61 * height;

interface WelcomeProps {
  subTitle: string;
  info: string;
  last?: boolean;
  onPress: () => void;
  play: () => void;
}

const picture = {
  src: require('./welcome/7148-the-nyan-cat.json'),
  width: 300,
  height: 400,
};

export const assets = [picture.src];

const Welcome = ({ navigation }: StackNavigationProps<Routes, 'Welcome'>) => {
  const theme = useTheme();

  const LootieRef2 = useRef(null);

  useEffect(() => {
    LootieRef2.current.play();
  }, []);

  return (
    <Box flex={1} backgroundColor='white'> 
      <Box flex={1} borderBottomRightRadius='xl' backgroundColor='grey'>
        <LottieView
          ref={LootieRef2}
          source={picture.src}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: width,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius='xl' backgroundColor='white' >
        <Box
          backgroundColor='grey'
          position='absolute'
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor='white'
          borderTopLeftRadius='xl'
          justifyContent='space-evenly'
          alignItems='center'
          flex={1}
          paddingTop='xl'
          paddingHorizontal='xl'
          paddingBottom='l'
        >
          <Text variant='title2' style={styles.subTitle}>
            Let's get start
          </Text>
          <Text variant='body' style={styles.description}>
            Login to your account below or signup for an amazing experience.
          </Text>
          <Button
            variant='primary'
            label="Have an account? Login"
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            variant='default'
            label="Join us. It's free"
            onPress={() => navigation.navigate('Onboarding')}
          />
          <Button
            variant='transparent'
            label="forget passwords?"
            onPress={() => navigation.goBack()}
          />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    borderTopLeftRadius: 75,
  },
  subTitle: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: 'SFProText-Semibold',
    color: '#0c0d34',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'SFProText-Regular',
    color: '#0c0d34',
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default Welcome;
