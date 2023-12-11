import React, { FC } from 'react'
import { TextListProps } from './types'
import { Dimensions, ImageBackground, StyleProp, View, ViewStyle } from 'react-native'
import { RegularText } from 'shared/ui/Text/RegularText'
import { CSSProp } from 'styled-components'

const bg1 = require('shared/ui/assets/bgs/text_block_1.png')
const bg2 = require('shared/ui/assets/bgs/text_block_2.png')
const bg3 = require('shared/ui/assets/bgs/text_block_3.png')

const windowWidth = Dimensions.get('window').width;


const personalDataText: CSSProp = {
  fontSize: 14,
  color: '#FFFFFF',
  paddingVertical: 5,
  marginHorizontal: 15,
  width: windowWidth * 0.8,
  zIndex: 20
};

const getBg = (idx: number) => {
  switch (idx) {
    case 0:
      return bg1
    case 1:
      return bg2
    case 2:
      return bg2
    case 3:
      return bg3
    default:
      return bg2
  }
}

export const TextList: FC<TextListProps> = ({ items }) => {
  return <>
    {items.map((item, key) => (
        <View className='rounded-[16px] mt-[5px] mb-[5px] overflow-hidden w-full relative' key={key}>
          <View className='bg-dark-teal absolute left-0 top-0 bottom-0 right-0 opacity-50 z-10'></View>
          <ImageBackground source={getBg(key)} className='w-full'>
            <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>
              {item}
            </RegularText>
          </ImageBackground>
        </View>
    ))}
  </>
}