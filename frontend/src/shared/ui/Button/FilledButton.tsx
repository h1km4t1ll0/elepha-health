import React, {FunctionComponent} from 'react';
import {ButtonProps} from 'shared/ui/Button/types';
import {Text as RNText, View} from 'react-native';
import styled from 'styled-components/native';

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
`;

export const FilledButton: FunctionComponent<ButtonProps> = (props) => {
    const styles = {
        fontSize: 18,
        ...(props.textStyles as object),
    };

    return (
        <View
            style={{
                width: '100%',
                minHeight: 41,
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: props.backgroundColor,
                ...(props?.viewStyle as object),
            }}
        >
            <ButtonView
                className={(props.isRound ? 'rounded-full' : 'rounded-[12px]') + ' bg-dark-teal font-semibold min-h-[41px] align-baseline'}
                onPress={props.onPress}
                style={props.btnStyles}
            >
                <RNText style={styles} className='font-semibold text-[18px] mt-[7px] text-white align-middle'>
                  {props.children}
                </RNText>
            </ButtonView>
        </View>
    );
};

// export default FilledButton;
