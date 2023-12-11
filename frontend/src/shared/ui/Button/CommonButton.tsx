import React, { FunctionComponent } from 'react';
import {ButtonProps} from 'shared/ui/Button/types';
import { Text as RNText } from 'react-native';
import styled from 'styled-components/native';

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
  border-radius: 20px;
`;

export const CommonButton: FunctionComponent<ButtonProps> = (props) => {
  const styles = {
    fontSize: 18,
    fontFamily: 'Montserrat_400Regular',
    ...(props.textStyles as object),
  };

  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <RNText style={styles} className='text-[16px] text-dark-teal'>
        {props.children}
      </RNText>
    </ButtonView>
  );
};

