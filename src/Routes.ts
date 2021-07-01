import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type AppRoutes = {
  Main: undefined;
  PanGesture: undefined;
  TapGesture: undefined;
  DynamicSpring: undefined;
  WithTiming: undefined;
  WithRepeat: undefined;
};

export interface AppNavigationProps<RouteName extends keyof AppRoutes> {
  navigation: StackNavigationProp<AppRoutes, RouteName>;
  route: RouteProp<AppRoutes, RouteName>;
}
