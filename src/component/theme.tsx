import { createTheme, createText, BaseTheme } from '@shopify/restyle';


const theme : BaseTheme = createTheme({
  colors: {
    primary: '#2cb9b0',
    title: '#0c0d34',
    text: 'rgba(12, 13, 52, 0.7)',
    body: 'rgba(12, 13, 52, 0.05)',
    white: 'white',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
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
  },
  breakpoints: {

  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export default theme;