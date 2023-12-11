import React, { FC } from 'react'
import { TextListProps } from './types'
import { Dimensions, StyleProp, View, ViewStyle } from 'react-native'
import { RegularText } from 'shared/ui/Text/RegularText'
import { CSSProp } from 'styled-components'

const windowWidth = Dimensions.get('window').width;


const personalDataText: CSSProp = {
  fontSize: 14,
  color: '#FFFFFF',
  paddingVertical: 5,
  marginHorizontal: 15,
  width: windowWidth * 0.8,
  zIndex: 20
};

export const ModalTextList: FC<TextListProps> = ({ items }) => {
  return <>
    {items.map((item, key) => (
        <View className='rounded-[16px] mt-[5px] mb-[5px] overflow-hidden w-full relative' key={key}>
          <View className='bg-dark-teal absolute left-0 top-0 bottom-0 right-0 opacity-70 z-10'></View>
            <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>
              {item}
            </RegularText>
        </View>
    ))}
  </>
}