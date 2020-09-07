/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { useRef } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import Slider, { SLIDER_HEIGHT, BORDER_RADIUS } from './slider';
import SubSlider from './subslide';
import Dot from './dot';
import { useValue, onScrollEvent, interpolateColor, useScrollHandler } from 'react-native-redash';
import Animated, { multiply, divide } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
// const BORDER_RADIUS = 75;
const slides = [
  { 
    title: 'Relaxed', 
    subTitle: 'Find Your Outfit', 
    info: "Confused about your outfits? Don't worry ! Find the best outfit.",
    color: '#bfeaf5',
    picture: require('../assets/pic/1.png'),
  },
  { 
    title: 'Playful', 
    subTitle: 'Hear it first. Wear it first.',
    info: 'Hating the clothes in your wardrobe? Explore hundreds of outfit idea.',
    color: '#beecc4',
    picture: require('../assets/pic/2.png'),
  },
  { 
    title: 'excentric',
    subTitle: 'Your Style, Your Way.',
    info: 'Create your individual & unique style and look amazing everyday',
    color: '#ffe4d9',
    picture: require('../assets/pic/3.png'),
  },
  { 
    title: 'funky', 
    subTitle: 'Look good, Feel good.',
    info: 'over the latest trends in fashion and explore your personalty',
    color: '#ffdddd',
    picture: require('../assets/pic/4.png'),
  },
]


const Onboarding = () => {
  const ScrollRef = useRef<Animated.ScrollView>(null);
  // const [y] = useState(new Animated.Value(0));

  const { scrollHandler, x } = useScrollHandler();

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
          // scrollEventThrottle={16}
          { ...scrollHandler }
        >
          { slides.map(({ title, picture }, index )=> (
            <Slider key={ index } right={(index % 2)} {...{ title, picture }}/>
          ))}
        </Animated.ScrollView>
      </Animated.View>

      <View style={styles.footer}>
        <Animated.View 
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map(( _, index) => ( 
              <Dot key={ index } currentIndex={ divide( x, width ) } {...{ index, x }}/>
            ))}
          </View>
          <Animated.View 
            style={{ 
              flex: 1, 
              flexDirection: 'row',
              width: width * slides.length,
              transform: [{ translateX: multiply( x, -1 ) }]
            }}
          >
          { slides.map(({ subTitle, info }, index ) => (
              <SubSlider 
                key={ index } 
                onPress={()=>{
                  if(ScrollRef.current){
                    console.log({ scrollTo: width * (index + 1) });
                    ScrollRef.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1), animated: true })
                  }
                }}
                last={ index === slides.length - 1 } 
                {...{ subTitle, info}}
              />
          ))}
          </Animated.View>
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
    // flexDirection: 'row',
    backgroundColor: '#fff', 
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    // width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }
  // absoluteFillObject: {
  //   position: 'absolute',
  //   top: 0,
  //   right: 0,
  //   bottom: 0,
  //   left: 0,
  // }
});


export default Onboarding;