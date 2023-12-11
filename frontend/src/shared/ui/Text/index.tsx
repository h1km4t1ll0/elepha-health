import React, { FC } from 'react';

import {RegularText} from 'shared/ui/Text/RegularText';
import {CustomText} from 'shared/ui/Text/CustomText';
import {SmallText} from 'shared/ui/Text/SmallText';
import {TextProps} from 'shared/ui/Text/types';
import {BigText} from 'shared/ui/Text/BigText';

export const Text: FC<TextProps> = (props) => {
  if (props.type == undefined) {
    return <CustomText textStyles={props.textStyles} children={props.children} />;
  }

  if (props.type == 'regular') {
    return <RegularText textStyles={props.textStyles} children={props.children} />;
  } if (props.type == 'big') {
    return <BigText textStyles={props.textStyles} children={props.children} />;
  } if (props.type == 'small') {
    return <SmallText textStyles={props.textStyles} children={props.children} />;
  }
};
