import React, { FunctionComponent } from 'react';
import { ButtonProps } from 'shared/ui/Button/types';
import { Text as RNText } from 'react-native';
import styled from 'styled-components/native';

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
  border-radius: 20px;
`;

export const CustomButton: FunctionComponent<ButtonProps> = (props) => (
  <ButtonView onPress={props.onPress} style={props.btnStyles}>
    <RNText style={props.textStyles}>
      {props.children}
    </RNText>
    ;
  </ButtonView>
);

// export default CustomButton;
