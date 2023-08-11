import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Page from '../components/Page';

const WORDS = ["what's", 'up', 'mobile', 'devs'];

const InterpolareScrollView = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      pagingEnabled
      style={styles.container}
      horizontal
      onScroll={scrollHandler}
      scrollEventThrottle={16}>
      {WORDS.map((title, index) => {
        return (
          <Page
            title={title}
            index={index}
            key={index}
            translateX={translateX}
          />
        );
      })}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
});

export default InterpolareScrollView;
