import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { Container, Button } from '../../component';
import { theme, Box } from '../../component';
import Svg, { Path } from 'react-native-svg';

// interface SocialLoginProps {
//   info: string;
//   last?: boolean;
//   onPress: () => void;
//   navigation: () => void;
// }

const SIZE = theme.borderRadii.l * 2;

const Google = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z"
      fill="#EA4335"
    />
    <Path
      d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 01-6.723-4.823l-4.04 3.067A11.965 11.965 0 0012 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987h-.001z"
      fill="#34A853"
    />
    <Path
      d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21z"
      fill="#4A90E2"
    />
    <Path
      d="M5.277 14.268A7.12 7.12 0 014.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 000 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067z"
      fill="#FBBC05"
    />
  </Svg>
);

const Facebook = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.945 22v-8.834H7V9.485h2.945V6.54c0-3.043 1.926-4.54 4.64-4.54 1.3 0 2.418.097 2.744.14v3.18h-1.883c-1.476 0-1.82.703-1.82 1.732v2.433h3.68l-.736 3.68h-2.944L13.685 22"
      fill="#000"
    />
  </Svg>
);

const Apple = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.3 3.832c.84-1.014 1.404-2.427 1.25-3.832-1.208.049-2.67.805-3.535 1.819-.777.898-1.457 2.335-1.273 3.712 1.346.105 2.722-.684 3.56-1.699H15.3zm3.022 8.918c.034 3.632 3.186 4.841 3.22 4.857-.025.085-.502 1.722-1.66 3.413-1 1.462-2.038 2.919-3.674 2.949-1.607.029-2.123-.953-3.961-.953-1.836 0-2.41.923-3.932.982-1.578.06-2.78-1.581-3.79-3.037-2.06-2.98-3.635-8.42-1.52-12.092C4.054 7.045 5.932 5.89 7.97 5.861c1.55-.03 3.013 1.043 3.96 1.043.948 0 2.726-1.29 4.595-1.101.783.033 2.979.316 4.39 2.381-.114.07-2.621 1.53-2.594 4.566"
      fill="#000"
    />
  </Svg>
);

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
  return (
    <Box
      marginHorizontal="s"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center" alignItems="center">
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
