import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import styles from './Styles';

const WithRepeat = () => {
  const rotation = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });

  return (
    <View style={[styles.container, styles.containerTapGesture]}>
      <Animated.View style={[styles.boxRepeat, style]} />
      <TouchableOpacity
        style={styles.touchNavigate}
        onPress={() => (rotation.value = withRepeat(withTiming(45), 10, true))}>
        <Text style={styles.txtNavigate}>Rotate Mee</Text>
      </TouchableOpacity>
    </View>
  );
};
export default WithRepeat;
