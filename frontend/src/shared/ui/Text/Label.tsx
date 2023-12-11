import React, { FunctionComponent } from 'react';
import { Text as RNText } from 'react-native';

import {TextProps} from './types';

export const Label: FunctionComponent<TextProps> = (props) => {
  const styles = {
    ...(props.textStyles as object),
  };

  return (
      <RNText style={styles} className='text-[16px] text-dark-teal mb-1.5 pl-1.5'>
        {props.children}
      </RNText>
  );
};