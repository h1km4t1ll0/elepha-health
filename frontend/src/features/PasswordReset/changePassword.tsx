import React, {FC, useEffect, useState} from 'react';
import {PasswordChange, ResetFeatureProps} from 'features/PasswordReset/types';
import {TextInput} from 'shared/ui/TextInput';
import {Text} from 'shared/ui/Text';
import {colorMap} from 'shared/ui/styles/colorMap';
import {Button} from 'shared/ui/Button';
import {validate} from 'shared/validation';
import {passwordValidations} from 'features/PasswordReset/validations';

export const ChangePassword: FC<ResetFeatureProps> = ({onSubmit}) => {
    const [data, setData] = useState<PasswordChange>({} as PasswordChange);
    const [errors, setErrors] = useState<PasswordChange>({} as PasswordChange);

    const handleChange = (key: keyof PasswordChange, value: string) => {
        setData(prevState => ({...(prevState || {}), [key]: value}))
    }

    useEffect(() => {
        if (!Object.keys(data).length) return;
        const errors = validate(passwordValidations, data);
        setErrors(errors as PasswordChange);
    }, [data]);

    const handleSubmit = async () => {
        if (!data.password || Object.keys(errors).length !== 0) return;
        console.log('submit')
        onSubmit(data.password);
    }

    return <>
        <Text type='regular'>Введите новый пароль</Text>

        <TextInput
            placeholder="Пароль"
            value={data.password}
            onChange={(text) => handleChange('password', text)}
            secureTextEntry
            error={errors.password}
        />

        <TextInput
            placeholder="Пароль"
            value={data.repeat}
            onChange={(text) => handleChange('repeat', text)}
            secureTextEntry
            error={errors.repeat}
        />

        <Button type="filled" backgroundColor={colorMap.blue} onPress={handleSubmit}>
            <Text type="regular" textStyles={{textAlign: 'center', color: 'white',}}>
                Подтвердить
            </Text>
        </Button>
    </>
}