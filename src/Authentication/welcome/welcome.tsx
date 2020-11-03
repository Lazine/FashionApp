/* eslint-disable react-native/no-color-literals */
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, Easing, TouchableOpacity } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import Button from '../../component/button';
import LottieView from 'lottie-react-native';
import animationData from './animation.json';
import { translateZ } from 'react-native-redash';
// import { Button } from '../../component';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen');
export const SLIDER_HEIGHT = 0.61 * height;

interface WelcomeProps {
  subTitle: string;
  info: string;
  last?: boolean;
  onPress: () => void;
  play: () => void;
}


const Welcome = ({ navigation }) => {
  // const [progress] = useState(new Animated.Value(0));
  const LootieRef2 = useRef(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
  };

  useEffect(() => {
    LootieRef2.current.play();
  }, []);


  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button style={styles.button} label='press' onPress={() => navigation.navigate('Onboarding')}/>
      <LottieView 
        ref={LootieRef2}
        source={require('./7148-the-nyan-cat.json')} 
        style={{ marginTop: 150, }}
        height={400} 
        width={400}
      />
    </View>
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
  button: {
    width: 100,
    height: 60,
    backgroundColor: 'red',
  }
});


export default Welcome;