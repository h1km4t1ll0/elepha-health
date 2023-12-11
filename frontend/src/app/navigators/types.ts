/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  Welcome: undefined;
  Pulse: undefined,
  Matrix: { pulse: string };
  Compare: { pulse: string };
  Login: undefined;
  Reset: undefined;
  Register: undefined;
  Profile: undefined;
  TabScreens: undefined;
  EditProfile: undefined;
  Edited: undefined;
  Future: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList,
Screen>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type StackNavigation = NavigationProp<RootStackParamList>;
