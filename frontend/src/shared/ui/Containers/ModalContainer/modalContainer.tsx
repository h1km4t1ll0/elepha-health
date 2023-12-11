import React, { FC, PropsWithChildren } from 'react'
import { ImageBackground, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ModalContainerProps } from 'shared/ui/Containers/ModalContainer/types'

const bg = require('shared/ui/assets/bgs/list_bg.png')

export const ModalContainer: FC<PropsWithChildren<ModalContainerProps>> = ({ children, onClose }) => {

  return <>
    <View className='flex-1 justify-center items-center'>
      <View className='absolute h-full w-full bg-black opacity-20 -z-10' />
      <ImageBackground source={bg} className='relative w-[90%] overflow-hidden' imageStyle={{ borderRadius: 16, width: '100%', height: 'auto' }}>
        <View className='absolute left-[3px] top-0 bottom-0 right-[3px] bg-dark-teal opacity-50 rounded-[16px]' />
        <View className='px-[10px] pb-[24px]'>
          <TouchableOpacity onPress={onClose} className='justify-end items-end mt-[10px]'>
            <MaterialCommunityIcons name="close" size={24} color="#FFFFFF"/>
          </TouchableOpacity>
          {children}
        </View>
      </ImageBackground>
    </View>

  </>
}