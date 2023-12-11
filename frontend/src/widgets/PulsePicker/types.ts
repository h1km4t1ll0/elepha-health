import {StyleProp, ViewStyle} from "react-native";

export interface PulsePickerProps {
  value: string;
  onIosChange: (value: string, index: number) => void;
  onAndroidChange (value: string): void;
  error?: string;

  style?: StyleProp<ViewStyle> | undefined,
}