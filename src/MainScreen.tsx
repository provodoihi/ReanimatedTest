import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {AppNavigationProps} from './Routes';
import styles from './Styles';

const Main = ({navigation}: AppNavigationProps<'Main'>) => {
  return (
    <View style={[styles.container, styles.containerMainScreen]}>
      <Text
        accessibilityLabel="text1"
        testID="text1"
        style={styles.txtMainScreen}>
        This is Test Reanimated
      </Text>
      <TouchableOpacity
        style={styles.touchNavigate}
        onPress={() => navigation.navigate('PanGesture')}>
        <Text style={styles.txtNavigate}>👋 To Pan Gesture Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchNavigate}
        onPress={() => navigation.navigate('TapGesture')}>
        <Text style={styles.txtNavigate}>🤲 To Tap Gesture Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchNavigate}
        onPress={() => navigation.navigate('DynamicSpring')}>
        <Text style={styles.txtNavigate}>🤘 To Dynamic Spring Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchNavigate}
        accessibilityLabel="button1"
        testID="button1"
        onPress={() => navigation.navigate('WithTiming')}>
        <Text style={styles.txtNavigate}>👍 To With Timing Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchNavigate}
        onPress={() => navigation.navigate('WithRepeat')}>
        <Text style={styles.txtNavigate}>👌 To With Repeat Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
