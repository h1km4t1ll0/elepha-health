import { Alert, StyleProp, TextStyle, View } from 'react-native';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {PageContainer} from 'shared/ui/Containers';
import {RootStackScreenProps} from 'app/navigators/types';
import {Button} from "shared/ui/Button";
import {Text} from "shared/ui/Text";
import {TextInput} from "shared/ui/TextInput";
import { getUser, setUser, StorageUser } from 'shared/storage'
import { updateUser } from 'shared/api';
import {useIsFocused} from "@react-navigation/native";
import { validate } from 'shared/validation'
import { editValidations } from 'pages/EditProfilePage/validation';
import {showErrorToast} from "shared/ui/Toast/toasts";
import { Title } from 'shared/ui/Text/Title';
import { Label } from 'shared/ui/Text/Label'
import { TallPageContainer } from 'shared/ui/Containers/PageContainer/tallPageContainer'

const dataTextStyle: StyleProp<TextStyle> = {
    marginRight: 5,
    marginLeft: 5,
    textAlign: 'left',
};

export const EditProfilePage: FC<RootStackScreenProps<'EditProfile'>> = ({navigation}) => {
    const [currentUser, setCurrentUser] = useState<Partial<StorageUser>>({});
    const [errors, setErrors] = useState<Partial<StorageUser>>({});
    const isFocused = useIsFocused();

    useEffect(() => {
        (async () => {
            if (isFocused) {
                const user = await getUser();
                setCurrentUser(user as StorageUser);
            }
        })();
    }, [isFocused]);

    useEffect(() => {
        if (!currentUser) return;
        const errors = validate(editValidations, currentUser);
        setErrors(errors);
    }, [currentUser]);

    const handleChange = (key: keyof StorageUser, value: string): void => {
        setCurrentUser(({ ...currentUser, [key]: value }));
    }

    const handlePress = async () => {
        const errors = validate(editValidations, currentUser || {});

        setErrors(errors);
        if (!currentUser || Object.keys(errors).length !== 0){
            return;
        }

        const res = await updateUser(currentUser, currentUser.id as string);

        if (res) {
            await setUser(currentUser as StorageUser)
            navigation.navigate('Profile')
        } else {
            showErrorToast();
        }
    }

    const handleCancel = useCallback(() => {
        Alert.alert(
            'Вы уверены?',
            'Изменения не будут сохранены',
            [
                { text: 'Нет, вернуться', style: 'cancel', onPress: () => {}, },
                { text: 'Да, уйти', onPress: () => navigation.navigate('Profile'), },
            ],
            { cancelable: false },
        );
    }, [navigation]);

    return (
        <TallPageContainer>
            <View className='pl-[27px] pr-[27px] mb-[30px] mt-2'>
                <Title>Личные данные</Title>
            </View>

            <View className=' pr-[10px]'>
                <Label type='regular'>Имя</Label>
                <TextInput
                    style={dataTextStyle}
                    onChange={(text) => handleChange('first_name', text)}
                    placeholder="Имя"
                    value={currentUser?.first_name}
                    error={errors.first_name}
                />

                <Label type="regular">Фамилия</Label>
                <TextInput
                    style={dataTextStyle}
                    onChange={(text) => handleChange('second_name', text)}
                    placeholder="Фамииля"
                    value={currentUser?.second_name}
                    error={errors.second_name}
                />

                <Label type="regular">Электронная почта</Label>
                <TextInput
                  style={dataTextStyle}
                  onChange={(text) => handleChange('email', text)}
                  placeholder="Электронная почта"
                  value={currentUser?.email}
                  error={errors.email}
                />

                <Label type="regular">Номер телефона</Label>
                <TextInput
                  style={dataTextStyle}
                  onChange={(text) => handleChange('phone_number', text)}
                  placeholder="Номер телефона"
                  value={currentUser?.phone_number}
                  error={errors.phone_number}
                />

                <View className='mb-0 mt-[22%] ml-[68px] mr-[68px]'>
                    <Button
                        isRound={true}
                        type="filled"
                        backgroundColor={'rgba(168, 168, 166, 0.3)'}
                        onPress={handlePress}
                    >
                        Сохранить
                    </Button>
                </View>


                <Button type="common" textStyles={{ color: '#000000', marginTop: 17 }} onPress={handleCancel}>
                    Отменить
                </Button>
            </View>
        </TallPageContainer>
    );
};
