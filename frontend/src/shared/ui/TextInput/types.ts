import { KeyboardTypeOptions, StyleProp, TextStyle } from 'react-native';

export interface TextInputProps {
  secureTextEntry?: boolean | undefined;
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  value?: string | undefined;
  onChange: ((text: string) => void) | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  error?: string;
  editable?: boolean
}
