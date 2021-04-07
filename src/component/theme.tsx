import {
  createTheme,
  createText,
  BaseTheme,
  createBox,
} from '@shopify/restyle';

const theme: BaseTheme = createTheme({
  colors: {
    primary: '#2cb9b0',
    secondary: '#0c0d34',
    danger: '#ff0058',
    text: 'rgba(12, 13, 52, 0.7)',
    transparent: 'rgba(12, 13, 52, 0)',
    white: '#fff',
    // darkGrey: '#8a8d90',
    grey: '#f4f0ef',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: 'SFProText-Bold',
      color: 'white',
      textAlign: 'center',
    },
    title1: {
      fontSize: 28,
      fontFamily: 'SFProText-Semibold',
      color: 'secondary',
    },
    title2: {
      fontSize: 28,
      lineHeight: 30,
      fontFamily: 'SFProText-Semibold',
      color: 'secondary',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SFProText-Regular',
      color: 'text',
      textAlign: 'center',
    },
    button: {
      fontSize: 15,
      fontFamily: 'SFProText-Semibold',
      color: 'text',
    },
  },
  // breakpoints: {},
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
