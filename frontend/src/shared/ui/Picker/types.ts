import {StyleProp, TextStyle, ViewStyle} from "react-native";

export interface PickerProp {
    label: string;
    value: string;
}

export interface PickerI {
    pickerProps: PickerProp[];
    backgroundColor?: string;
    textStyles?: StyleProp<TextStyle>;
    viewContainerStyles?: StyleProp<ViewStyle>;
    onChange: (value: any, index: number) => void;
    style?: StyleProp<ViewStyle> | undefined,
    placeholder: string;
}