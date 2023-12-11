import React, { FC, useEffect, useState } from 'react'
import { RootStackScreenProps } from 'app/navigators/types';
import { Image, ImageBackground, Modal, Platform, ScrollView, View, } from 'react-native'
import { Text } from 'react-native';
import { Button } from 'shared/ui/Button';
import { PulseInstruction } from 'entities/instruction/ui';
import { PulsePicker } from 'widgets/PulsePicker/pulsePicker';
import { pulseValidations, validate } from 'shared/validation';
import { getCompareText } from 'entities/compareText';
import { CompareText } from 'shared/api/compareText';
import {showErrorToast} from "shared/ui/Toast/toasts";
import { MiddlePageContainer } from 'shared/ui/Containers/PageContainer/middlePageContainer';
import { Title } from 'shared/ui/Text/Title';
import { Divider } from 'shared/ui/Divider';
import { ModalContainer } from 'shared/ui/Containers/ModalContainer/modalContainer'
import Toast from "react-native-toast-message";
const bg = require('shared/ui/assets/bgs/space_matrix_1.png');
const pulseImage = require('shared/ui/assets/pulse.png')
const pulseHeartImage = require('shared/ui/assets/pulse_with_heart.png')

const getPulseType = (pulse: number): string => {
  if (pulse < 60) {
    return 'activation';
  }
  else if (pulse >= 60 && pulse <= 80) {
    return 'balance';
  }
  else {
    return 'rest';
  }
};

export const ComparePage: FC<RootStackScreenProps<'Compare'>> = ({ navigation, route }) => {
  const { pulse } = route.params;
  const [show, setShow] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [desc, setDesc] = useState<string>('')
  const [newPulse, setNewPulse] = useState<string>('');
  const [errors, setErrors] = useState<{ pulse?: string }>({});

  const handleIosChange = (value: string, _: number): void => {
    setNewPulse(value.replace(/[^0-9]/g, ''));
  };

  const handleAndroidChange = (value: string) => {
    setNewPulse(value.replace(/[^0-9]/g, ''));
  };

  useEffect(() => {
    if (!newPulse) return;
    const errors = validate(pulseValidations, newPulse ? { pulse: +newPulse } : {});
    setErrors(errors);
  }, [newPulse]);

  const handleClick = async () => {
    const errors = validate(pulseValidations, newPulse ? { pulse: +newPulse } : {});
    setErrors(errors);
    if (Object.keys(errors).length !== 0) {
      // if (Platform.OS == 'ios') {
        showErrorToast("Вы не указали пульс!", 'bottom', 40);
      // }
      return;
    }

    const type = getPulseType(+pulse) + (+newPulse > +pulse ? 'Up' : 'Down');
    const baseDesc = `Ваш пульс изменился с ${pulse} до ${newPulse} ударов в минуту\n`;

    const desc = await getCompareText(pulse === newPulse ? 'default' : type as keyof CompareText);

    setDesc(baseDesc + desc);
    setShow(true);
    setNewPulse('');
  };

  if (show)
    return (
        <MiddlePageContainer>
          <Title textStyles={{ textAlign: 'center', marginTop: '5%' }}>Результаты</Title>

          <View className='mt-[8%] mx-[25px] mb-[15px]'>
            <Divider height='h-[3px]' />
          </View>

          <View className='w-[300px] h-[250px] relative rounded-[16px] mx-auto'>
            <ImageBackground source={bg} className='absolute w-full h-full' imageStyle={{ borderRadius: 16 }} />
            <View className='absolute w-full h-full z-10 bg-dark-teal opacity-50 rounded-[16px]' />

            <View className='flex h-full items-center rounded-[16px] z-50 w-full'>
              <Text className='font-semibold text-[18px] text-white text-center mx-[6%] my-[30px]'>{desc}</Text>

              <Image source={pulseHeartImage} className='w-[195px] h-auto absolute bottom-[20px]' />
            </View>
          </View>

          <View className='mx-[25px] mt-[15px]'>
            <Divider height='h-[3px]' />
          </View>

          <View className='mt-[5%] w-[90%] self-center'>
            <Button type="filled" onPress={() => navigation.navigate('Profile')} isRound>
              На главную
            </Button>
          </View>
          <Toast/>
        </MiddlePageContainer>
    );

  return (
      <MiddlePageContainer>
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <Modal visible={showModal} animationType="fade" transparent>
            <ModalContainer onClose={() => setShowModal(false)}>
              <PulseInstruction />
            </ModalContainer>
          </Modal>

          <Title textStyles={{ textAlign: 'center', marginTop: '5%' }}>Результаты</Title>

          <View className='mt-[17%] mx-[25px] mb-[15px]'>
            <Divider height='h-[3px]' />
          </View>

          <View className='w-[300px] h-[250px] relative rounded-[16px] mx-auto'>
            <ImageBackground source={bg} className='absolute w-full h-full' imageStyle={{ borderRadius: 16 }} />
            <View className='absolute w-full h-full z-10 bg-dark-teal opacity-50 rounded-[16px]' />

            <View className='flex justify-center h-full items-center rounded-[16px] z-50 w-full'>
              <PulsePicker
                  value={newPulse}
                  onAndroidChange={handleAndroidChange}
                  onIosChange={handleIosChange}
                  error={errors.pulse}
              />

              <Image source={pulseImage} className='w-[119px] h-auto my-[30px]' />

              <Button type="common" textStyles={{ color: 'white', fontWeight: 'bold' }} onPress={() => setShowModal(true)}>
                Как измерить?
              </Button>
            </View>
          </View>

          <View className='mx-[25px] mt-[15px]'>
            <Divider height='h-[3px]' />
          </View>

          <View className='mt-[5%] w-[90%] self-center'>
            <Button type="filled" onPress={handleClick} isRound>
              Проанализировать
            </Button>
          </View>
          <Toast/>
        </ScrollView>
      </MiddlePageContainer>
  )
};