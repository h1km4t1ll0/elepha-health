import * as React from 'react';
import { Image, ImageBackground, Keyboard, Text, View } from 'react-native'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import Toast from "react-native-toast-message";
import {toastConfig} from "shared/ui/Toast";
import { LinearGradient } from 'expo-linear-gradient';

export const PageContainer: FC<PropsWithChildren> = (props) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => setKeyboardVisible(true)
    );

    const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return <>
    <ImageBackground
        source={require('shared/ui/assets/bgs/space_1.png')}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
    >
      <View className='absolute w-full h-full bg-dark-teal opacity-50'></View>
      <Image
          source={require('shared/ui/assets/bgs/слон_background.png')}
          className='w-[94px] h-[70px] absolute top-[11%]' />
      <Image source={require('shared/ui/assets/bgs/слон_background.png')} className='z-10' />

      <View className='absolute w-full h-[77%] bg-white top-[23%] rounded-t-3xl z-10'
            style={{
              shadowOffset: { width: 0, height: 100 },
              shadowColor: 'black',
              shadowOpacity: 0.8,
              shadowRadius: 20, elevation: 100
            }}>
        <View className='z-50 h-full w-full p-[20px] pb-0'>
          {props.children}
        </View>
          {!isKeyboardVisible
              ? <>
                <View className="absolute bottom-[4%] z-30 w-full">
                  <Text className="text-center text-black text-[15px]">CureSound by Elepha</Text>
                </View>
                <View className='absolute bottom-0 z-20 w-full'>
                  <LinearGradient colors={['transparent', 'rgba(0, 131, 134, 0.6)']} className="w-full h-[120px]" />
                </View>
              </>
              : null}
      </View>

    </ImageBackground>
    <Toast config={toastConfig} />
  </>
};

