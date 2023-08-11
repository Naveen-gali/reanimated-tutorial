/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {useAnimatedGestureHandler} from 'react-native-reanimated';

const imageUri =
  'https://images.unsplash.com/photo-1621569642780-4864752e847e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const PinchHandlerBasics = () => {
  const pinchHandler =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive: e => console.log(e),
    });

  return (
    <PinchGestureHandler onGestureEvent={pinchHandler}>
      <AnimatedImage
        source={{
          uri: imageUri,
        }}
        style={{
          flex: 1,
        }}
      />
    </PinchGestureHandler>
  );
};

export default PinchHandlerBasics;
