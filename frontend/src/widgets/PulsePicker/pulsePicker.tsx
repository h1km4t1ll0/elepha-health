import React, { FC } from 'react';
import { PickerProp } from 'shared/ui/Picker/types';
import {Platform, View} from 'react-native';
import { ElephaPicker } from 'shared/ui/Picker';
import { TextInput } from 'shared/ui/TextInput';
import { PulsePickerProps } from 'widgets/PulsePicker/types';

const arrayRange = (start: number, stop: number, step: number) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );

export const PulsePicker: FC<PulsePickerProps> = ({ value, onAndroidChange, onIosChange, error, style }) => {
  const pickerOptions: PickerProp[] = arrayRange(20, 240, 1).map((value) => ({
    value: value.toString(),
    label: value.toString(),
  }));

  if (Platform.OS === 'ios') {
      return (<ElephaPicker backgroundColor="#00838633" pickerProps={pickerOptions} onChange={onIosChange} style={{width: '80%', ...(style as object)}} textStyles={{color: 'white'}} placeholder={"Укажите ваш пульс"}/>);
  }

  return (
      <TextInput
          style={{
              width: '100%',
              height: 40,
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              ...(style as object)}}
          value={value}
          onChange={onAndroidChange}
          keyboardType='number-pad'
          placeholder='Ваш пульс'
          error={error}
      />);
}