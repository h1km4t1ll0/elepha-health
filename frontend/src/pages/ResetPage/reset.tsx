import React, { FC } from 'react'
import { PageContainer } from 'shared/ui/Containers';
import { View } from 'react-native';
import { ResetWidget } from 'widgets/ResetWidget';
import { Text } from 'shared/ui/Text';
import { RootStackScreenProps } from 'app/navigators/types';
import { Button } from 'shared/ui/Button'
import { Divider } from 'shared/ui/Divider'

export const ResetPasswordPage: FC<RootStackScreenProps<'Reset'>> = ({ navigation }) => {

  return (
      <PageContainer>
        <View className='pt-1 pl-[27px] pr-[27px] mb-[30px] mt-2'>
          <Text type='big' textStyles={{ marginBottom: 5 }}>
            Восстановление пароля
          </Text>

          <Divider />
        </View>
        <ResetWidget navigation={navigation} />

        <Button type="common" onPress={() => navigation.navigate('Login')} textStyles={{ marginTop: 30 }}>
            Назад
        </Button>
      </PageContainer>
  )
}