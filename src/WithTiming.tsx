import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withDelay,
} from 'react-native-reanimated';
import styles from './Styles';

const WithTiming = () => {
  const width = useSharedValue(96);

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: 800,
        easing: Easing.bezier(0.25, 0.1, 0.25, 0.1),
      }),
    };
  });

  const style2 = useAnimatedStyle(() => {
    return {
      width: withDelay(
        800,
        withTiming(width.value, {
          duration: 800,
          easing: Easing.bezier(0.25, 0.1, 0.25, 0.1),
        }),
      ),
    };
  });

  return (
    <View style={[styles.container, styles.containerTapGesture]}>
      <Animated.View style={[styles.boxTiming, style]} />
      <Animated.View style={[styles.boxTiming2, style2]} />
      <TouchableOpacity
        style={styles.touchNavigate}
        onPress={() => (width.value = Math.random() * 256 + 24)}>
        <Text style={styles.txtNavigate}>Touch Mee</Text>
      </TouchableOpacity>
    </View>
  );
};
export default WithTiming;
