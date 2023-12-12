import React, { useState, useEffect, FunctionComponent, useRef, LegacyRef } from 'react';
import { View, TouchableOpacity, Platform, Image, ImageBackground } from 'react-native'
import {Audio} from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BigText} from 'shared/ui/Text/BigText';
import {HLSPlayerComponent} from 'shared/ui/LottieHLSPlayer/types';
import {formatTime} from 'shared/ui/LottieHLSPlayer/lib';
import LottieView from 'lottie-react-native';
import AnimatedLottieView from 'lottie-react-native';
const lottieBubble = require('shared/ui/assets/bubble.json');
const gifBubble = require('shared/ui/assets/bubble.gif');
const bg = require('shared/ui/assets/bgs/space_matrix.png');

export const LottieHLSPlayer: FunctionComponent<HLSPlayerComponent> = (props) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [sound, setSound] = useState<Audio.Sound | null>(new Audio.Sound());
    const [duration, setDuration] = useState<number>(0)
    const [currentTime, setCurrentTime] = useState<number>(0);
    const animationRef = useRef<LottieView>();


    const playPause = async () => {
        if (!sound) return;
        if (isPlaying) {
            animationRef.current?.pause();
            await sound.pauseAsync();
        } else {
            animationRef.current?.play();
            await sound.playAsync();
        }
        setIsPlaying((prev) => !prev);
    };

    const lottieSize = props.windowHeight * 0.3;

    useEffect(() => {
        setCurrentTime(0);
        const loadAudio = async () => {
            try {
                if (sound) {
                    await sound.unloadAsync();
                }

                const newData = await Audio.Sound.createAsync(
                    {uri: props.audioUrl }, //props.audioUrl},
                    {shouldPlay: false},
                    null,
                    false,
                );
                await newData.sound.setIsLoopingAsync(true);
                setDuration((newData.status as any)['durationMillis'])
                setSound(newData.sound);
            } catch (error) {
                console.error('Error loading audio:', error);
            }
        };

        loadAudio().then(r => r);

        return () => {
            if (sound) {
                sound.unloadAsync().then(r => r);
            }
        };
    }, []);

    useEffect(() => {
        const updateCurrentTime = setInterval(async () => {
            if (isPlaying && sound) {
                const status = await sound.getStatusAsync();
                if (status.isLoaded) {
                    setCurrentTime(status.positionMillis);
                    if (Math.abs(status.positionMillis - duration) < 100) {
                        animationRef.current?.pause();
                        await sound.pauseAsync();
                        setIsPlaying(false);
                        clearInterval(updateCurrentTime);
                    }
                }
            }
        }, 100);

        return () => {
            clearInterval(updateCurrentTime);
        };
    }, [isPlaying, sound]);

    useEffect(() => {
        if (sound) {
            sound.pauseAsync().then(r => r);
            setIsPlaying(false);
        }
    }, []);

    return (
        <View className='w-[300px] h-[300px] relative rounded-[16px]'
            style={{alignSelf: 'center'}}>
            <ImageBackground source={bg} className='absolute w-full h-full' imageStyle={{ borderRadius: 16 }} />
            <View className='absolute w-full h-full z-10 bg-dark-teal opacity-50 rounded-[16px]' />

            <View className='flex justify-center h-full items-center rounded-[16px] z-50'>
                {Platform.OS === 'ios'
                    ? <LottieView
                        ref={animationRef as LegacyRef<AnimatedLottieView> | undefined}
                        source={lottieBubble}
                        style={{ width: lottieSize, height: lottieSize, position: 'absolute', opacity: 0.7, }}
                        loop
                    />
                    : <Image
                        style={{ width: lottieSize, height: lottieSize, position: 'absolute', opacity: 0.7, }}
                        source={gifBubble}
                    />
                }

                <TouchableOpacity
                    onPress={playPause}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 30,
                        height: 30,
                        position: 'absolute',
                        zIndex: 1000
                    }}
                >
                    <Icon name={isPlaying ? 'pause' : 'play'} size={30} color="white" />
                </TouchableOpacity>

                <BigText textStyles={{ position: 'absolute', width: '100%', bottom: 15, color: 'white', fontSize: 24 }}>
                    {formatTime(currentTime)}
                </BigText>
            </View>
        </View>
    );
};
