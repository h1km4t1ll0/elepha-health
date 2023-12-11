import * as React from 'react';
import { Image, ImageBackground, View } from 'react-native'
import { FC, PropsWithChildren } from 'react'
import Toast from "react-native-toast-message";
import {toastConfig} from "shared/ui/Toast";

export const MiddlePageContainer: FC<PropsWithChildren> = ({ children }) => {

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

      <View className='absolute w-full h-[68%] bg-white top-[16%] bottom-[16%] rounded-3xl z-10'
            style={{
              // shadowOffset: { width: 0, height: 100 },
              // shadowColor: 'black',
              // shadowOpacity: 0.8,
              // shadowRadius: 20, elevation: 100
            }}>
        <View className='z-50 h-full w-full p-[20px] pb-0'>
          {children}
        </View>
      </View>
    </ImageBackground>

    <Toast config={toastConfig} />
  </>
};

