import React, {FC, useState} from 'react';
import {StyleProp, TextStyle, View, ViewStyle} from 'react-native';
import {Text} from 'shared/ui/Text';
import {TextInput} from 'shared/ui/TextInput';
import {WidgetContainer} from 'shared/ui/Containers';
import {EditUserI} from 'features/UserEdit/types';
import {CSSProp} from 'styled-components';
import {RegularText} from "shared/ui/Text/RegularText";
//import {RowUser} from "shared/api";

// const rowStyle: CSSProp = {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
// };

const rowStyle: CSSProp = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
};

const dataStyle: CSSProp = {
    justifyContent: 'flex-start',
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(168, 168, 166, 0.3)',
    borderRadius: 15,
    height: 1,
};

const dataTextStyle = {
    marginRight: 5,
    marginLeft: 5,
    textAlign: 'left',
};

export const EditUser: FC<EditUserI> = (props) => {
    const [firstName, setFirstName] = useState<string>(props.user.firstName);
    const [secondName, setSecondName] = useState<string>(props.user.secondName);
    const [email, setEmail] = useState<string>(props.user.email);
    const [phoneNumber, setPhoneNumber] = useState<string>(props.user.phoneNumber);

    return (<WidgetContainer color={"rgba(168, 168, 166, 0.3)"}>
            <RegularText>Имя</RegularText>
            <TextInput
                style={dataTextStyle as StyleProp<TextStyle>}
                onChange={(text) => {
                    // props.user.firstName = text;
                    // props.setUser(props.user);
                    setFirstName(text)
                }}
                placeholder="Имя"
                value={firstName}
            />

            <Text type="regular">Фамилия</Text>
            <TextInput
                style={dataTextStyle as StyleProp<TextStyle>}
                onChange={(text) => {
                    // props.user.secondName = text;
                    // props.setUser(props.user);
                    setSecondName(text);
                }}
                placeholder="Фамииля"
                value={secondName}
            />

            <Text type="regular">
                Электронная почта
            </Text>
            <TextInput
                style={dataTextStyle as StyleProp<TextStyle>}
                onChange={(text) => {
                    // props.user.email = text;
                    // props.setUser(props.user);
                    setEmail(text);
                }}
                placeholder="Электронная почта"
                value={email}
            />

            <Text type="regular">
                Номер телефона
            </Text>

            <TextInput
                style={dataTextStyle as StyleProp<TextStyle>}
                onChange={(text) => {
                    // props.user.phoneNumber = text;
                    // props.setUser(props.user);
                    setPhoneNumber(text);
                }}
                placeholder="Номер телефона"
                value={phoneNumber}
            />
        </WidgetContainer>
    )
};
