/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react-native/no-color-literals */
import React, { ReactNode } from 'react';
import { StyleSheet, Dimensions, Image, StatusBar } from 'react-native';
import { theme, Box } from '../component';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const assets = [require('./assets/patterns/00.jpg')];
const { width } = Dimensions.get('screen');
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({ footer, children }: ContainerProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Box flex={1} backgroundColor="white">
      <StatusBar barStyle="light-content" />
      <Box borderBottomLeftRadius="xl" overflow="hidden" height={200}>
        <Image
          source={assets[0]}
          style={{
            width,
            height,
            borderBottomLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box flex={1} overflow="hidden" backgroundColor="secondary">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <Box
          borderRadius="xl"
          borderTopLeftRadius={0}
          backgroundColor="white"
          flex={1}
          // alignItems="center"
        >
          {children}
        </Box>
      </Box>
      <Box backgroundColor="secondary" paddingTop="xl" alignItems="center">
        {footer}
        <Box height={insets.bottom} />
      </Box>
    </Box>
  );
};

Container.defaultProps = { variant: 'default' };

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 104,
    width: 375,
  },
});

export default Container;
