import {Image, View,} from 'react-native';
import LottieView from 'lottie-react-native';
import React, {FC, useEffect, useState} from 'react'
import {Text} from 'shared/ui/Text';
import {PageContainer} from 'shared/ui/Containers/PageContainer';
import {RootStackScreenProps} from 'app/navigators/types';
import {colorMap} from 'shared/ui/styles/colorMap';
import {Button} from 'shared/ui/Button';
import {getUser} from 'shared/storage'
import {getWelcomeTextContent, TextSlider} from 'entities/TextSlider';
import {MiddlePageContainer} from "shared/ui/Containers/PageContainer/middlePageContainer";
import {TallPageContainer} from "shared/ui/Containers/PageContainer/tallPageContainer";
import {WelcomePageContainer} from "shared/ui/Containers/PageContainer/welcomePageContainer";
import {Montserrat_400Regular} from "@expo-google-fonts/montserrat";
import AnimatedLottieView from "lottie-react-native";
import {Divider} from "shared/ui/Divider";

export const WelcomePage: FC<RootStackScreenProps<'Welcome'>> = ({navigation}) => {
    const elephant = require('shared/ui/assets/elepha.json')
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<string | null>(null)

    useEffect(() => {
        navigation.navigate('Login');
        (async () => {
            const user = await getUser();
            if (user) {
                navigation.navigate('Profile');
            } else {
                const res = await getWelcomeTextContent();
                if (res)
                    setData(res);
                setLoading(false);
            }
        })();
    }, []);

    return (
        <>
            <WelcomePageContainer>
                <View style={{
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '100%',
                    height: 440
                }}
                >
                    <View className='z-40 pt-10'>
                        {<LottieView
                            source={elephant}
                            autoPlay
                            loop={false}
                            speed={1}
                            style={{width: '100%', height: '100%'}}
                        />}
                    </View>
                    <View className='z-50 pb-16'>
                        <Text
                            type="big"
                            textStyles={{
                                color: colorMap.white,
                                textAlign: 'center',
                                fontSize: 48,
                                lineHeight: 50
                            }}
                        >
                            CureSound
                        </Text>
                    </View>
                    <View className='z-50 pb-12'>
                        <Text
                            type="regular"
                            textStyles={{
                                color: colorMap.white,
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            by Elepha
                        </Text>
                    </View>

                </View>
                <View className='pt-5 pl-[27px] pr-[27px] mb-[14px] mt-2'>
                    <Text
                        type="big"
                        textStyles={{
                            color: '#000000',
                            textAlign: 'center',
                            fontSize: 26,
                            marginBottom: 15
                        }}
                    >
                        Добро пожаловать!
                    </Text>
                    <Divider/>
                </View>
                <View className='pl-[24px] pr-[24px]'
                      style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          height: 150
                      }}>
                    {data && <TextSlider data={data.split('\n')}/>}
                </View>
                <View className='pl-[27px] pr-[27px] mt-[14px]'>
                    <Divider/>
                    <View className='pl-[27px] pr-[27px] mt-[20px]'
                          style={{
                              width: '60%',
                              alignSelf: 'center'
                          }}>
                        {!loading && <Button
                            type="filled"
                            backgroundColor={colorMap.blue}
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text type="regular">Начать</Text>
                        </Button>}
                    </View>
                </View>

            </WelcomePageContainer>
        </>
    );
};

