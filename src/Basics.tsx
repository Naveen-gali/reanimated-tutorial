import React, {useEffect} from 'react';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';
import {StyleSheet, View} from 'react-native';

const SIZE = 100.0;

function handleRotation(progress: SharedValue<number>) {
  'worklet';
  return `${progress.value * 2 * Math.PI} rad`;
}

const Basics = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
        {
          scale: scale.value,
        },
        {
          rotate: handleRotation(progress),
        },
      ],
      borderRadius: (progress.value * SIZE) / 2,
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), 20, true);
    scale.value = withRepeat(withSpring(2), 20, true);
  }, [progress, scale]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            height: SIZE,
            width: SIZE,
            backgroundColor: 'blue',
          },
          reanimatedStyle,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Basics;
