import { TextInputProps } from 'shared/ui/TextInput/types';
import { FC } from 'react';
import { StyleProp, TextInput as RNTextInput, TextStyle } from 'react-native'
import * as React from 'react';
import {Text} from 'shared/ui/Text';

export const errorStyles: StyleProp<TextStyle> = {
  marginBottom: 10,
  textAlign: 'center',
  fontWeight: '600'
}

export const TextInput: FC<TextInputProps> = (props) => (
    <>
      <RNTextInput
          style={{ color: '#008386', ...(props.style as object) }}
          className='h-[41px] w-full bg-dark-teal/20 rounded-lg pl-3 mb-[10px]'
          placeholder={props.placeholder}
          placeholderTextColor="#008386"
          value={props.value}
          editable={props.editable ?? true}
          onChangeText={props.onChange}
          keyboardType={props.keyboardType}
          autoCapitalize={props.autoCapitalize}
          secureTextEntry={props.secureTextEntry}
      />
      {props.error && <Text type='small' textStyles={errorStyles}>{props.error}</Text>}
    </>
);

