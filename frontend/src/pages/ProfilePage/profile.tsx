import { View, ScrollView, } from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {RootStackScreenProps} from 'app/navigators/types';
import {Button} from "shared/ui/Button";
import {EditUserButton} from 'features/UserEditButton';
import {UserPresentation} from "entities/user";
import { getUser, setUser, StorageUser } from 'shared/storage';
import {useIsFocused} from "@react-navigation/native";
import { Title } from 'shared/ui/Text/Title';
import { TallPageContainer } from 'shared/ui/Containers/PageContainer/tallPageContainer';

export const ProfilePage: FC<RootStackScreenProps<'Register'>> = ({navigation}) => {
    const [currentUser, setCurrentUser] = useState<StorageUser>()
    const isFocused = useIsFocused()

    useEffect(() => {
        (async () => {
            if (!isFocused) return;

            const res = await getUser();
            if (res) {
                setCurrentUser(res);
            } else {
                navigation.navigate('Login');
            }
        })();

    }, [isFocused]);

    const logout = () => {
        setUser('').then(r => r);
        navigation.navigate('Login');
    }

    return (
        <TallPageContainer hasTabBar={true}>
            <ScrollView>
                <View className='pt-1 pl-[27px] pr-[27px] mb-[30px] mt-2 flex justify-between items-center flex-row'>
                    <Title>Личный кабинет</Title>
                    <EditUserButton onClick={() => navigation.navigate('EditProfile')}/>
                </View>

                <View className='pr-[10px]'>
                    <UserPresentation textColor={"black"} user={currentUser as StorageUser} backgroundColor={'#FFFFFF'} />

                    <View className='mt-[15%]'>
                        <Button type="common" onPress={logout}>Выйти</Button>
                    </View>
                </View>
            </ScrollView>
        </TallPageContainer>
    );
};

