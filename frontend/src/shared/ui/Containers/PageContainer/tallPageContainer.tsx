import * as React from 'react';
import {Easing, Image, ImageBackground, Keyboard, Text, View} from 'react-native'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import Toast from "react-native-toast-message";
import {toastConfig} from "shared/ui/Toast";
import { LinearGradient } from 'expo-linear-gradient';

export interface TallPageContainerProps {
  hasTabBar?: boolean
}

export const TallPageContainer: FC<PropsWithChildren<TallPageContainerProps>> = ({ hasTabBar, children }) => {
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
          className='w-auto h-[10%] absolute top-[6%]' />
      <Image source={require('shared/ui/assets/bgs/слон_background.png')} className='z-10' />

      <View className='absolute w-full h-[84%] bg-white top-[16%] rounded-t-3xl z-10'
            style={{
              // shadowOffset: { width: 0, height: 100 },
              // shadowColor: 'black',
              // shadowOpacity: 0.8,
              // shadowRadius: 20, elevation: 100
            }}>
        <View className='z-50 h-full w-full p-[20px] pb-0'>
          {children}
        </View>
        {!isKeyboardVisible
            ? <>
              <View className={'absolute z-20 w-full ' + (hasTabBar ? '-bottom-[60px]' : 'bottom-0')}>
                <LinearGradient  start={{x: 0, y: 0}}
                                 end={{x: 0, y: 1.5}} colors={['transparent', 'rgba(0, 131, 134, 0.4)']} className="w-full h-[120px]" />
              </View>
            </>
            : null}
      </View>

    </ImageBackground>
    <Toast config={toastConfig} />
  </>
};

