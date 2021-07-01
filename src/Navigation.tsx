import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AppRoutes} from './Routes';

import Main from './MainScreen';
import Gesture from './PanGesture';
import TapGesture from './TapGesture';
import DynamicSpring from './DynamicSpring';
import WithTiming from './WithTiming';
import WithRepeat from './WithRepeat';

const AppStack = createStackNavigator<AppRoutes>();

const AppNavigation = () => {
  return (
    <AppStack.Navigator initialRouteName={'Main'}>
      <AppStack.Screen name={'Main'} component={Main} />
      <AppStack.Screen name={'PanGesture'} component={Gesture} />
      <AppStack.Screen name={'TapGesture'} component={TapGesture} />
      <AppStack.Screen name={'DynamicSpring'} component={DynamicSpring} />
      <AppStack.Screen name={'WithTiming'} component={WithTiming} />
      <AppStack.Screen name={'WithRepeat'} component={WithRepeat} />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
