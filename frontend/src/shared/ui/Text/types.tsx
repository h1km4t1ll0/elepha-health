import { ReactNode } from 'react';
import { StyleProp, TextStyle } from 'react-native';

export interface TextProps {
  type?: 'regular' | 'big' | 'small';
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}
