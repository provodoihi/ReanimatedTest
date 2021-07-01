import React from 'react';
import {View, Image, Text} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import styles from './Styles';

const DynamicSpring = () => {
  const translateX = useSharedValue(20);
  const translateY = useSharedValue(20);
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      offsetX: number;
      offsetY: number;
    }
  >({
    onStart: (_event, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.offsetX + event.translationX;
      translateY.value = ctx.offsetY + event.translationY;
    },
    onEnd: (event, ctx) => {
      translateX.value = ctx.offsetX;
      translateY.value = ctx.offsetY;
    },
  });
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  // for 2nd img
  const translateX2 = useDerivedValue(() => withSpring(translateX.value));
  const translateY2 = useDerivedValue(() => withSpring(translateY.value));
  const style2 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX2.value},
        {translateY: translateY2.value},
      ],
    };
  });

  // for 3rd img
  const translateX3 = useDerivedValue(() => withSpring(translateX2.value));
  const translateY3 = useDerivedValue(() => withSpring(translateY2.value));
  const style3 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX3.value},
        {translateY: translateY3.value},
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.txtDynamicSpring}>Move Me!!!!!!</Text>
      <Animated.View style={[style2, styles.imgDynamicPanGesture]}>
        <Image
          source={require('./assests/help.png')}
          style={styles.imagePanGesture}
        />
      </Animated.View>
      <Animated.View style={[style3, styles.imgDynamicPanGesture]}>
        <Image
          source={require('./assests/oops.png')}
          style={styles.imagePanGesture}
        />
      </Animated.View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={style}>
          <Image
            source={require('./assests/user_color.png')}
            style={styles.imagePanGesture}
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default DynamicSpring;
