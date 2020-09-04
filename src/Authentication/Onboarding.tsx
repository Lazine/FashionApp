/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { useRef } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import Slider, { SLIDER_HEIGHT } from './slider';
import SubSlider from './subslide';
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash';
import Animated, { multiply } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
const BORDER_RADIUS = 75;
const slides = [
  { 
    title: 'Relaxed', 
    subTitle: 'Find Your Outfit', 
    info: "Confused about your outfits? Don't worry ! Find the best outfit.",
    color: '#bfeaf5' 
  },
  { 
    title: 'Playful', 
    subTitle: 'Hear it first. Wear it first.',
    info: 'Hating the clothes in your wardrobe? Explore hundreds of outfit idea.',
    color: '#beecc4'
  },
  { 
    title: 'excentric',
    subTitle: 'Your Style, Your Way.',
    info: 'Create your individual & unique style and look amazing everyday',
    color: '#ffe4d9'
  },
  { 
    title: 'funky', 
    subTitle: 'Look good, Feel good.',
    info: 'over the latest trends in fashion and explore your personalty',
    color: '#ffdddd'
  },
]


const Onboarding = () => {
  const ScrollRef = useRef<Animated.ScrollView>(null);
  const x = useValue(0);
  // const [y] = useState(new Animated.Value(0));

  //  TODO: useScrollEvent
  const onScroll = onScrollEvent({ x });

  // const changeColor = y.interpolate({
  //   inputRange: [0, width, width * 2, width * 3],
  //   outputRange: ['#bfeaf5', '#beecc4', '#ffe4d9', '#ffdddd']
  // })
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView 
          ref={ScrollRef}
          horizontal 
          snapToInterval={ width } 
          decelerationRate='fast'
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
          {...{ onScroll }}
        >
          { slides.map(({ title, },index)=> (
            <Slider key={ index } right={(index % 2)} {...{ title }}/>
          ))}
          {/* <Slider label='relaxed' />
          <Slider label='playful' right/>
          <Slider label='excentric' />
          <Slider label='funky' right/> */}

        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View 
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View 
          style={[
            styles.footerContent, 
            { width: width * slides.length, flex: 1, transform: [{ translateX: multiply( x, -1 ) }] 
          }]}
        >
          { slides.map(({ subTitle, info }, index ) => (
            <SubSlider 
              key={ index } 
              onPress={()=>{
                if(ScrollRef.current){
                  console.log({ scrollTo: width * index });
                  ScrollRef.current
                    .getNode()
                    .scrollTo({ x: width * index, animated: true })
                }
              }}
              last={ index === slides.length - 1 } 
              {...{ subTitle, info}}/>
          ))}
        </Animated.View>
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
    height: SLIDER_HEIGHT,
    // backgroundColor: '#ec8',
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1, 
    flexDirection: 'row',
    backgroundColor: '#fff', 
    borderTopLeftRadius: BORDER_RADIUS,
  },
  // absoluteFillObject: {
  //   position: 'absolute',
  //   top: 0,
  //   right: 0,
  //   bottom: 0,
  //   left: 0,
  // }
});


export default Onboarding;