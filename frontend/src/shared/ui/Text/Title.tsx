import React, { FunctionComponent } from 'react';
import { Text as RNText } from 'react-native';

import {TextProps} from './types';

export const Title: FunctionComponent<TextProps> = (props) => {
  const styles = {
    ...(props.textStyles as object),
  };

  return (
      <RNText style={{ textAlign: 'center', ...styles}} className='text-[26px] leading-[33px] font-semibold text-black pt-1'>
        {props.children}
      </RNText>
  );
};