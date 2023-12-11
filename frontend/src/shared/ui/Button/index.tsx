import React, { FC } from 'react';

import {FilledButton} from 'shared/ui/Button/FilledButton';
import {CustomButton} from 'shared/ui/Button/CustomButton';
import {CommonButton} from 'shared/ui/Button/CommonButton';
import {ButtonProps} from 'shared/ui/Button/types';
import {StyleProp, TextStyle, ViewStyle} from "react-native";

export const Button: FC<ButtonProps> = (props) => {
  if (props.type == undefined) {
    return (
      <CustomButton
        onPress={props.onPress}
        style={props.btnStyles}
        textStyles={props.textStyles}
        children={props.children}
      />
    );
  }

  if (props.type == 'filled') {
    return (
      <FilledButton
        viewStyle={props.viewStyle}
        backgroundColor={props.backgroundColor}
        onPress={props.onPress}
        style={props.btnStyles}
        textStyles={props.textStyles}
        children={props.children}
        isRound={props.isRound}
      />
    );
  } if (props.type == 'common') {
    return (
      <CommonButton
        onPress={props.onPress}
        style={props.btnStyles}
        textStyles={props.textStyles}
        children={props.children}
      />
    );
  }
};

// export default Button;
