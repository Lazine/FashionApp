import {
  createTheme,
  createText,
  BaseTheme,
  createBox,
} from '@shopify/restyle';

const theme: BaseTheme = createTheme({
  colors: {
    primary: '#2cb9b0',
    title: '#0c0d34',
    text: 'rgba(12, 13, 52, 0.7)',
    body: 'rgba(12, 13, 52, 0.05)',
    button: '#0c0d34',
    transparent: 'rgba(12, 13, 52, 0)',
    white: 'white',
    grey: 'rgba(12, 13, 52, 0.05)',
    'slide.grey': '#f4f0ef',
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
      color: 'title',
    },
    title2: {
      fontSize: 28,
      lineHeight: 30,
      fontFamily: 'SFProText-Semibold',
      colo: 'title',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SFProText-Regular',
      color: 'body',
      textAlign: 'center',
    },
    button: {
      fontSize: 15,
      fontFamily: 'SFProText-Semibold',
      color: 'text',
    },
  },
  breakpoints: {},
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
