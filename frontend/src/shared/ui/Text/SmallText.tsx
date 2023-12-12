import React, { FunctionComponent } from 'react';
import { Text as RNText } from 'react-native';

import {TextProps} from './types';

export const SmallText: FunctionComponent<TextProps> = (props) => {
  const styles = {
    fontSize: 16,
    fontFamily: 'Montserrat_400Regular',
    ...(props.textStyles as object),
  };

  return (
    <RNText style={styles} className='text-dark-teal'>
      {props.children}
    </RNText>
  );
};

// export default SmallText;
