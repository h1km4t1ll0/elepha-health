import React, { FC, useEffect, useRef, useState } from 'react';
import { TextSliderProps } from 'entities/TextSlider/model';
import {Animated, Platform, View} from 'react-native';
import { Text } from 'shared/ui/Text';

const changeTime = 1500;
const delay = 5500;

const blockStyle = {
  width: 20,
  height: 4,
  backgroundColor: '#FFF',
  marginRight: 4
}

export const TextSlider: FC<TextSliderProps> = ({ data }) => {
  const fade = useRef(new Animated.Value(1)).current;
  const showBlock = useRef(new Animated.Value(0.4)).current;
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay + changeTime / 2),
      Animated.timing(fade, { toValue: 0, duration: changeTime / 2 - 50, useNativeDriver: true }),
      Animated.delay(50),
      Animated.timing(fade, { toValue: 1, duration: changeTime / 2 - 50, useNativeDriver: true })
    ]).start();

    Animated.sequence([
      Animated.delay(300),
      Animated.timing(showBlock, { toValue: 1, duration: 100, useNativeDriver: true }),
      Animated.delay(changeTime / 2 + delay - 400),
      Animated.timing(showBlock, { toValue: 0.4, duration: 100, useNativeDriver: true }),
    ]).start();
  }, [currentIdx])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx(prevState => (prevState + 1) % data.length);
    }, delay + changeTime);
    return () =>  clearInterval(interval);
  }, []);

  return <>
    <Animated.View style={{marginLeft: 10, marginRight: 10, opacity: fade, width: '80%' }}>
      <Text
          type='big'
          textStyles={{ color: '#000000', textAlign: 'center', textTransform: 'uppercase' }}
      >
        {data[currentIdx]}
      </Text>
    </Animated.View>
  </>
}