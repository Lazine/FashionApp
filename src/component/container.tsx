/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useTheme } from '@shopify/restyle';
import { Theme, Text, Box } from './theme';

const { width, height } = Dimensions.get('screen');

interface ContainerProps {
  children: ReactNode;
  onPress: () => void;
}

const Container = ({ children }: ContainerProps) => {
  const theme = useTheme<Theme>();

  return (
    <Box flex={1}>
      <Box>
        <Image
          style={styles.container}
          source={require('./assets/patterns/01.jpg')}
        />
      </Box>
    </Box>
  );
};

Container.defaultProps = { variant: 'default' };

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    height: 44,
    width: 245,
    marginBottom: 15,
  },
});

export default Container;
