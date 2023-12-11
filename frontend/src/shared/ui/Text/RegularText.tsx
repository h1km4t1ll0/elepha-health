import React, { FunctionComponent } from 'react';
import { Text as RNText } from 'react-native';

import {TextProps} from './types';

export const RegularText: FunctionComponent<TextProps> = (props) => {
  const styles = {
    fontSize: 18,
    fontFamily: 'Montserrat_400Regular',
    ...(props.textStyles as object),
  };

  return (
    <RNText style={styles}>
      {props.children}
    </RNText>
  );
};

