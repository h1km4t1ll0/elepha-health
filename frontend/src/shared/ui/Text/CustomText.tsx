import React, { FunctionComponent } from 'react';
import { Text as RNText } from 'react-native';

import {TextProps} from './types';

export const CustomText: FunctionComponent<TextProps> = (props) => (
  <RNText style={props.textStyles}>
    {props.children}
  </RNText>
);

// export default CustomText;
