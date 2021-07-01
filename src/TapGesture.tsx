import React from 'react';
import {View, Text} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import styles from './Styles';

const TapGesture = () => {
  const pressed = useSharedValue(false);
  const eventHandler = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>(
    {
      onStart: () => {
        pressed.value = true;
      },
      onEnd: () => {
        pressed.value = false;
      },
    },
  );
  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#001972',
      borderColor: pressed.value ? '#FFC0CB' : '#ffffff',
      borderWidth: pressed.value ? 8 : 0,
      transform: [{scale: withSpring(pressed.value ? 1.5 : 1)}],
    };
  });
  return (
    <View style={[styles.container, styles.containerTapGesture]}>
      <TapGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[style, styles.boxTapGesture]}>
          <Text style={styles.txtBoxTapGesture}>Tapp Me</Text>
        </Animated.View>
      </TapGestureHandler>
    </View>
  );
};

export default TapGesture;
