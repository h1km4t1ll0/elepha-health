import {Platform, ScrollView, View} from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import {Text} from 'shared/ui/Text';
import {PageContainer} from 'shared/ui/Containers';
import { RootStackScreenProps } from 'app/navigators/types';
import { Button } from 'shared/ui/Button';
import { colorMap } from 'shared/ui/styles/colorMap';
import { PulseInstruction } from 'entities/instruction/ui';
import { PulsePicker } from 'widgets/PulsePicker/pulsePicker';
import { pulseValidations } from 'shared/validation/pulseValidation'
import { validate } from 'shared/validation'
import {showErrorToast} from "shared/ui/Toast/toasts";
import { TallPageContainer } from 'shared/ui/Containers/PageContainer/tallPageContainer'
import { Title } from 'shared/ui/Text/Title'
import { Divider } from 'shared/ui/Divider'
import { EditUserButton } from 'features/UserEditButton'
import Toast from "react-native-toast-message";

export const PulsePage: FC<RootStackScreenProps<'Pulse'>> = ({navigation}) => {
  const [pulse, setPulse] = useState<string>('');
  const [errors, setErrors] = useState<{ pulse?: string }>({});

  const handleIosChange = (value: any, index: number): void => {
    setPulse(value.replace(/[^0-9]/g, ''));
  };

  const handleAndroidChange = (value: string) => {
    setPulse(value.replace(/[^0-9]/g, ''));
  };

  useEffect(() => {
    if (!pulse) return;
    const errors = validate(pulseValidations, pulse ? { pulse: +pulse } : {});
    setErrors(errors);
  }, [pulse]);

  const handleNavigation = () => {
    const errors = validate(pulseValidations, pulse ? { pulse: +pulse } : {});
    setErrors(errors);

    if (Object.keys(errors).length !== 0){
      // if (Platform.OS == 'ios') {
          console.log('sel;riughlisrtghnlisrtgnilrtug');
        showErrorToast("Вы не указали пульс!", 'top', 20);
      // }
      return;
    }

    setPulse('');
    navigation.navigate('Matrix', { pulse: pulse });
  };

  return (
    <TallPageContainer hasTabBar={true}>
      <ScrollView style={{ flex: 1, width: '100%', }}>
          <View className='pt-1 pl-[27px] pr-[27px] mb-[14px] mt-2'>
            <Title>Нужно измерить ваш пульс</Title>
          </View>

          <View className='mb-[8px]'>
            <Divider height='h-[3px]' />
          </View>

          <PulseInstruction />

          <View className='mt-[8px] mb-[12px]'>
            <Divider height='h-[3px]' />
          </View>

          <PulsePicker
              style={{ width: '80%' }}
              value={pulse}
              onAndroidChange={handleAndroidChange}
              onIosChange={handleIosChange}
              error={errors.pulse}
          />


          <Button type="filled" onPress={handleNavigation} isRound viewStyle={{ width: '85%' }}>
            Прослушать аудиоматрицу
          </Button>

      </ScrollView>
    </TallPageContainer>
  );
};
