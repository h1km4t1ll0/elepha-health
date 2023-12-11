import { View } from 'react-native';
import React, { FC, useEffect, useState } from 'react'
import {PageContainer} from 'shared/ui/Containers';
import {RootStackScreenProps} from 'app/navigators/types';
import {Button} from 'shared/ui/Button';
import {TextInput} from 'shared/ui/TextInput';
import {Text} from "shared/ui/Text";
import { setUser } from 'shared/storage';
import { login } from 'shared/api';
import { validate } from 'shared/validation';
import { loginValidations } from 'pages/LoginPage/validation';
import {showErrorToast, showWrongCredentialsToast} from "shared/ui/Toast/toasts";
import { Divider } from 'shared/ui/Divider'

interface LoginData {
  email?: string;
  password?: string;
}

export const LoginPage: FC<RootStackScreenProps<'Login'>> = ({navigation}) => {
    const [data, setData] = useState<LoginData>({});
    const [errors, setErrors] = useState<LoginData>({});

    const handleChange = (key: keyof LoginData, value: string): void => {
      setData(({ ...data, [key]: value }));
    }

    useEffect(() => {
      if (!Object.keys(data).length) return;
      const errors = validate(loginValidations, data);
      setErrors(errors);
    }, [data]);

    const handleLogin = async () => {
      try {
        const errors = validate(loginValidations, data);
        setErrors(errors);
        if (Object.keys(errors).length !== 0) return;

        const user= await login(data.email || '', data.password || '');

        if (user) {
          await setUser(user);
          setData({});
          navigation.navigate('Profile');
        } else {
            showWrongCredentialsToast();
        }
      } catch (e) {
        showErrorToast()
        console.error(e);
      }
    }

    return (
        <PageContainer>
          <View className='pt-1 pl-[27px] pr-[27px] mb-[30px] mt-2'>
            <Text type='big' textStyles={{ marginBottom: 5 }}>
              Войдите или зарегистрируйтесь
            </Text>

            <Divider />
          </View>

          <View className='pl-[10px] pr-[10px] mb-[10%]'>
            <TextInput
                placeholder="Email"
                value={data.email}
                onChange={(text) => handleChange('email', text)}
                keyboardType="email-address"
                autoCapitalize="none"
                error={errors.email}
            />

            <TextInput
                placeholder="Пароль"
                value={data.password}
                onChange={(text) => handleChange('password', text)}
                secureTextEntry={true}
                error={errors.password}
            />

            <Button type="common" onPress={() => navigation.navigate('Reset')}>
              <Text type="small" textStyles={{ textAlign: 'center' }}>
                Забыли пароль?
              </Text>
            </Button>
          </View>

          <View className='px-[20px]'>
            <Button type="filled" onPress={handleLogin}>Войти</Button>
            <Button type="common" onPress={() => navigation.navigate('Register')} textStyles={{ marginTop: 30 }}>
              Регистрация
            </Button>
          </View>
        </PageContainer>
    );
};

