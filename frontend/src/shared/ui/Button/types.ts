import {
  GestureResponderEvent, StyleProp, TextStyle, ViewStyle,
} from 'react-native';
import React from 'react';

export interface ButtonProps {
  type?: 'common' | 'filled';
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  backgroundColor?: string;
  viewStyle?: StyleProp<ViewStyle>;
  isRound?: boolean
}
