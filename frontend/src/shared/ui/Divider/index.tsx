import { FC } from 'react'
import { View } from 'react-native'

export const Divider: FC<{ height?: string }> = ({ height }) => {
  return <View className={`w-full ${height || 'h-[1px]'} bg-dark-teal`}></View>
}