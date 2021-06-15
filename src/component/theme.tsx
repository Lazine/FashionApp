/* eslint-disable prettier/prettier */
import { ViewStyle, TextStyle, ImageStyle, Dimensions } from 'react-native';

import {
  createTheme,
  createText,
  BaseTheme,
  createBox,
  useTheme as useReTheme,
} from '@shopify/restyle';

const originWidth = 320;
const originHeight = 568;

export const { width, height } = Dimensions.get('window');

export const widthRatio = (width / originWidth) < 1.2 ? 0.74 : 1;

export const heightRatio = (height / originHeight) < 1.2 ? 0.74 : 1;


export const theme: BaseTheme = createTheme({
  colors: {
    primary: '#2cb9b0',
    secondary: '#0c0d34',
    danger: '#ff0058',
    text: 'rgba(12, 13, 52, 0.7)',
    transparent: 'rgba(12, 13, 52, 0)',
    white: '#fff',
    // darkGrey: '#8a8d90',
    grey: '#f4f0ef',
    primaryLight: '#E7F9F7',
  },
  spacing: {
    s: 8 * widthRatio,
    m: 16 * widthRatio,
    l: 24 * widthRatio,
    xl: 40 * widthRatio,
  },
  borderRadii: {
    s: 4 * widthRatio,
    m: 10 * widthRatio,
    l: 25 * widthRatio,
    xl: 75 * widthRatio,
  },
  textVariants: {
    hero: {
      fontSize: 80 * widthRatio,
      lineHeight: 80 * widthRatio,
      fontFamily: 'SFProText-Bold',
      color: 'white',
      textAlign: 'center',
    },
    title1: {
      fontSize: 28 * widthRatio,
      fontFamily: 'SFProText-Semibold',
      color: 'secondary',
    },
    title2: {
      fontSize: 28 * widthRatio,
      lineHeight: 30 * widthRatio,
      fontFamily: 'SFProText-Semibold',
      color: 'secondary',
    },
    body: {
      fontSize: 16 * widthRatio,
      lineHeight: 24 * widthRatio,
      fontFamily: 'SFProText-Regular',
      color: 'text',
      textAlign: 'center',
    },
    button: {
      fontSize: 15 * widthRatio,
      fontFamily: 'SFProText-Semibold',
      color: 'text',
    },
  },
  // breakpoints: {},
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };
