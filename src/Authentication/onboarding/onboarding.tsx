/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { useRef } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Slider, { SLIDER_HEIGHT } from './slider';
import SubSlider from './subslide';
import Dot from './dot';
import { interpolateColor, useScrollHandler } from 'react-native-redash';
import Animated, {
  multiply,
  divide,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { useTheme } from '../../component';
import { Theme, makeStyles } from '../../component/theme';
import { Routes, StackNavigationProps } from '../../component/Navigation';

const { width, height } = Dimensions.get('window');
// const BORDER_RADIUS = 75;

const slides = [
  {
    title: 'Relaxed',
    subTitle: 'Find Your Outfit',
    info: "Confused about your outfits? Don't worry ! Find the best outfit.",
    color: '#bfeaf5',
    picture: {
      src: require('../../../pic/1.png'),
      width: 2113,
      height: 2883,
    },
  },
  {
    title: 'Playful',
    subTitle: 'Hear it first. Wear it first.',
    info:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit idea.',
    color: '#beecc4',
    picture: {
      src: require('../../../pic/2.png'),
      width: 1560,
      height: 2044,
    },
  },
  {
    title: 'excentric',
    subTitle: 'Your Style, Your Way.',
    info: 'Create your individual & unique style and look amazing everyday',
    color: '#ffe4d9',
    picture: {
      src: require('../../../pic/3.png'),
      width: 2482,
      height: 4140,
    },
  },
  {
    title: 'funky',
    subTitle: 'Look good, Feel good.',
    info: 'over the latest trends in fashion and explore your personalty',
    color: '#ffdddd',
    picture: {
      src: require('../../../pic/4.png'),
      width: 1587,
      height: 2690,
    },
  },
];

const Onboarding = ({
  navigation,
}: StackNavigationProps<Routes, 'Onboarding'>) => {
  const theme = useTheme();
  const styles = useStyles();
  const ScrollRef = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  // 不使用react-native-redash的寫法
  // const [animatedValue] = useState(new Animated.Value(0));
  // let interpolatedColor = animatedValue.interpolate({
  //   inputRange: [0, width, width * 2, width * 3],
  //   outputRange: ['#bfeaf5', '#beecc4', '#ffe4d9', '#ffdddd'],
  //   extrapolate: 'clamp'
  // });

  // let event = Animated.event([
  //   { nativeEvent: {
  //       contentOffset: {
  //         y: animatedValue
  //       }
  //    }}
  // ]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.slider,
          { backgroundColor } /* backgroundColor: interpolatedColor */,
        ]}
      >
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image
                source={picture.src}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  width: width,
                  height:
                    ((width - theme.borderRadii.xl) * picture.height) /
                    picture.width,
                  alignSelf: 'center',
                }}
              />
            </Animated.View>
          );
        })}

        <Animated.ScrollView
          ref={ScrollRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          // scrollEventThrottle={16}
          // onScroll={event}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slider key={index} right={index % 2} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>

      <View style={styles.footer}>
        <Animated.View
          style={[{ ...StyleSheet.absoluteFillObject }, { backgroundColor }]}
        />
        <Animated.View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot
                key={index}
                currentIndex={divide(x, width)}
                {...{ index, x }}
              />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subTitle, info }, index) => {
              const last = index === slides.length - 1;
              return (
                <SubSlider
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome');
                    } else {
                      // console.log({ scrollTo: width * (index + 1) });
                      ScrollRef.current
                        ?.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                  {...{ subTitle, info, last }}
                />
              );
            })}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slider: {
    height: SLIDER_HEIGHT,
    // backgroundColor: '#ec8',
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.l,
    // width,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  // absoluteFillObject: {
  //   position: 'absolute',
  //   top: 0,
  //   right: 0,
  //   bottom: 0,
  //   left: 0,
  // }
}));

export const assets = slides.map((slide) => slide.picture.src);

export default Onboarding;
