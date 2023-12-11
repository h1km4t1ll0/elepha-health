import * as React from 'react';
import {Image, ImageBackground, Keyboard, Text, View} from 'react-native'
import {FC, PropsWithChildren, useEffect, useState} from 'react'
import Toast from "react-native-toast-message";
import {toastConfig} from "shared/ui/Toast";
import {LinearGradient} from 'expo-linear-gradient';

export const WelcomePageContainer: FC<PropsWithChildren> = (props) => {
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
        <View className='absolute w-full h-full bg-white'>

            <Image
                source={require('shared/ui/assets/bgs/space_1.png')}
                className='absolute w-full h-[55%] z-20'
            ></Image>
            <View className='absolute w-full h-[55%] rounded-b-[40px] z-30 bg-dark-teal opacity-50'
                  style={{
                      shadowOffset: {width: 0, height: 4},
                      shadowColor: 'black',
                      shadowOpacity: 0.8,
                      shadowRadius: 4, elevation: 100
                  }}>
            </View>
                <View className='z-40 h-full w-full p-[20px]'>
                    {props.children}
                </View>
                {!isKeyboardVisible
                    ? <>
                        <View className='absolute bottom-0 z-20 w-full'>
                            <LinearGradient colors={['transparent', 'rgba(0, 131, 134, 0.6)']}
                                            className="w-full h-[120px]"/>
                        </View>
                    </>
                    : null}
        </View>
        <Toast config={toastConfig}/>
    </>
};

