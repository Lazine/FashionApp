import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Slider from './slider';

const { width, height } = Dimensions.get('window');

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView 
          horizontal 
          snapToInterval={ width } 
          decelerationRate='fast'
          showsHorizontalScrollIndicator={false}
          bounces={false}>

          <Slider label='relaxed' />
          <Slider label='playful' right/>
          <Slider label='excentric' />
          <Slider label='funky' right/>

        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={{...StyleSheet.absoluteFillObject, backgroundColor: '#eca'}}></View>
        <View style={{flex: 1, backgroundColor: '#fff', borderTopLeftRadius: 75,}}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slider: {
    height: 0.61 * height,
    backgroundColor: '#eca',
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
  // absoluteFillObject: {
  //   position: 'absolute',
  //   top: 0,
  //   right: 0,
  //   bottom: 0,
  //   left: 0,
  // }
})


export default Onboarding;