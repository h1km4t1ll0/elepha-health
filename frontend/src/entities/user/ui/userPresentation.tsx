import React, {FC} from 'react';
import {RegularText} from 'shared/ui/Text/RegularText';
import {UserComponent} from 'entities/user/ui/types';
import {StyleProp, TextStyle, View, ViewStyle} from 'react-native';
import {WidgetContainer} from 'shared/ui/Containers';
import { Label } from 'shared/ui/Text/Label'
import { TextInput } from 'shared/ui/TextInput'

const rowStyle: StyleProp<ViewStyle> = {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
    left: 0,
    // width: '100%',
};

const dataStyle: StyleProp<ViewStyle> = {
    justifyContent: 'flex-start',
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(168, 168, 166, 0.3)',
    borderRadius: 15,
    height: '4%',
    width: '100%',
    left: 0,
    marginBottom: '4%'
};

const dataTextStyle: StyleProp<TextStyle> = {
    // marginBottom: 0,
    marginRight: 5,
    marginLeft: 5,
    textAlign: 'left',
};

export const UserPresentation: FC<UserComponent> = ({ user }) => (
    <>
        <Label type='regular'>Имя</Label>
        <TextInput
            style={dataTextStyle}
            placeholder="Имя"
            value={user?.first_name}
            onChange={() => {}}
            editable={false}
        />

        <Label type="regular">Фамилия</Label>
        <TextInput
            style={dataTextStyle}
            placeholder="Фамииля"
            value={user?.second_name}
            onChange={() => {}}
            editable={false}
        />

        <Label type="regular">Электронная почта</Label>
        <TextInput
            style={dataTextStyle}
            placeholder="Электронная почта"
            value={user?.email}
            onChange={() => {}}
            editable={false}
        />

        <Label type="regular">Номер телефона</Label>
        <TextInput
            style={dataTextStyle}
            placeholder="Номер телефона"
            value={user?.phone_number}
            onChange={() => {}}
            editable={false}
        />
    </>
);
