import { ImageBackground, Modal, ScrollView, Text as RNText, Text, TouchableOpacity, View, } from 'react-native'
import React, {FC, useState} from 'react';
import {RootStackScreenProps} from 'app/navigators/types';
import {FilledButton} from "shared/ui/Button/FilledButton";
import {useUser} from "shared/hooks";
import {updateUser} from "shared/api";
import {showErrorToast, showSuccessToast} from "shared/ui/Toast/toasts";
import { TallPageContainer } from 'shared/ui/Containers/PageContainer/tallPageContainer';
import { Title } from 'shared/ui/Text/Title';
import { Divider } from 'shared/ui/Divider';
import { ModalContainer } from 'shared/ui/Containers/ModalContainer/modalContainer';
import { LiveVersion } from 'entities/liveVersion/liveVersion';
import { FutureVersion } from 'entities/futureVersion/futureVersion';

export const FuturePage: FC<RootStackScreenProps<'Future'>> = () => {
    const [showLive, setShowLive] = useState<boolean>(false);
    const [showFuture, setShowFuture] = useState<boolean>(false);
    const currentUser = useUser();

    const handleSendFeedback = async () => {
        if (!currentUser) return
        const res = await updateUser({ feedback: true }, currentUser?.id);

        if (res) {
            showSuccessToast();
        } else {
            showErrorToast();
        }
    }

    return (
        <TallPageContainer hasTabBar>
            <ScrollView style={{ flex: 1, paddingHorizontal: 15 }}>
                <Modal visible={showLive} animationType="fade" transparent>
                    <ModalContainer onClose={() => setShowLive(false)}>
                        <LiveVersion />
                    </ModalContainer>
                </Modal>
                <Modal visible={showFuture} animationType="fade" transparent>
                    <ModalContainer onClose={() => setShowFuture(false)}>
                        <FutureVersion />
                    </ModalContainer>
                </Modal>

                <Title textStyles={{ textAlign: 'center', marginTop: 10, marginBottom: 24 }}>
                    Дорогой пользователь,
                </Title>

                <View className='mb-[16px]'>
                    <Divider height='h-[3px]' />
                </View>

                <Text className='text-[16px]'>
                    в скором времени приложение будет дополнено большим количеством
                    инструментов, которые позволят еще глубже исследовать ваше здоровье и улучшать внутреннее и
                    внешнее состояние.
                </Text>

                <View className='mt-[16px] mb-[24px]'>
                    <Divider height='h-[3px]' />
                </View>

                <TouchableOpacity onPress={() => setShowLive(true)} className='font-semibold align-baseline'>
                    <ImageBackground className='w-full h-[74px] overflow-hidden rounded-xl' source={require('shared/ui/assets/bgs/button.png')}>
                        <View className='absolute w-full h-full bg-dark-teal opacity-50 z-10 rounded-xl' />
                        <RNText className='font-semibold h-full text-[30px] text-white align-middle text-center z-20 pt-[15px]'>
                            Live-версия
                        </RNText>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setShowFuture(true)} className='font-semibold align-baseline mt-[20px]'>
                    <ImageBackground className='w-full h-[74px] overflow-hidden rounded-xl' source={require('shared/ui/assets/bgs/button.png')}>
                        <View className='absolute w-full h-full bg-dark-teal opacity-50 z-10 rounded-xl' />
                        <RNText className='font-semibold h-full text-[30px] text-white align-middle text-center z-20 pt-[15px]'>
                            Future-версия
                        </RNText>
                    </ImageBackground>
                </TouchableOpacity>

                <View className='mt-[24px] mb-[26px]'>
                    <Divider height='h-[3px]' />
                </View>

                <Text className='text-[16px]'>
                    Желаете стать одним из первых обладателей Future-версии и получить персональную скидку на ее приобретение?
                </Text>

                <Text className='text-[16px] mt-[10px] mb-[30px]'>
                    Кликайте “хочу” и мы вышлем вам всю информацию в преддверии запуска.
                </Text>

                <View className='w-[60%] self-center'>
                    <FilledButton
                        isRound
                        btnStyles={{  marginBottom: 30  }}
                        textStyles={{ fontSize: 20, height: 45, paddingTop: 5 }}
                        onPress={handleSendFeedback}
                    >
                        Хочу
                    </FilledButton>
                </View>
            </ScrollView>
        </TallPageContainer>
    );
};