import React, { FunctionComponent } from 'react';
import { Text as RNText } from 'react-native';

import {TextProps} from './types';

export const BigText: FunctionComponent<TextProps> = (props) => {
  const styles = {
    fontFamily: 'Montserrat_600SemiBold',
    ...(props.textStyles as object),
  };

  return (
    <RNText style={styles} className='text-[20px] text-center leading-6 text-black pt-1'>
      {props.children}
    </RNText>
  );
};

// export default BigText;
