import React, { FunctionComponent } from 'react';
import { Text as RNText } from 'react-native';

import {TextProps} from './types';

export const BigText: FunctionComponent<TextProps> = (props) => {
  const styles = {
    fontFamily: 'Montserrat_400Regular',
    ...(props.textStyles as object),
  };

  return (
    <RNText style={styles} className='text-[20px] text-center leading-6 font-semibold text-black pt-1'>
      {props.children}
    </RNText>
  );
};

// export default BigText;
