import { View } from 'react-native';
import React, { FC, useEffect, useState } from 'react'
import {PageContainer} from 'shared/ui/Containers';
import {RootStackScreenProps} from 'app/navigators/types';
import {TextInput} from "shared/ui/TextInput";
import {Text} from "shared/ui/Text";
import {Button} from "shared/ui/Button";
import { RegisterData } from 'shared/api/user/types';
import { registerValidations } from 'pages/RegisterPage/validation';
import { validate } from 'shared/validation';
import { register } from 'shared/api';
import { setUser } from 'shared/storage';
import { Divider } from 'shared/ui/Divider'

const inputStyle = {
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
};

export const RegisterPage: FC<RootStackScreenProps<'Register'>> = ({ navigation}) => {
    const [data, setData] = useState<RegisterData>({});
    const [errors, setErrors] = useState<RegisterData>({});

    const handleChange = (key: keyof RegisterData, value: string) => {
      setData(prevState => ({ ...prevState, [key]: value }))
    }

    useEffect(() => {
      if (!Object.keys(data).length) return;
      const errors = validate(registerValidations, data);
      setErrors(errors);
    }, [data]);

    const handleSubmit = async () => {
      const errors = validate(registerValidations, data);
      setErrors(errors);

      if (Object.keys(errors).length !== 0) {
          return;
      }

      const user = await register(data);

      if (user) {
        await setUser(user);
        navigation.navigate('Profile');
      } else {
        setErrors({ email: 'Произошла ошибка. Попробуйте позже...'});
      }
    }

    return (
        <PageContainer>
          <View className='pt-1 pl-[27px] pr-[27px] mt-2'>
            <Text type='big' textStyles={{ marginBottom: 5 }}>
              Регистрация
            </Text>

            <Divider />
          </View>

          <View className='pl-[10px] pr-[10px] mb-[10px] mt-[20px]'>
              <TextInput
                  placeholder="Имя"
                  value={data.firstName}
                  onChange={(text) => handleChange('firstName', text)}
                  style={inputStyle}
                  error={errors.firstName}
              />

              <TextInput
                  placeholder="Фамилия"
                  value={data.lastName}
                  onChange={(text) => handleChange('lastName', text)}
                  style={inputStyle}
                  error={errors.lastName}
              />

              <TextInput
                  style={inputStyle}
                  placeholder="Электронная почта"
                  value={data.email}
                  onChange={(text) => handleChange('email', text)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  error={errors.email}
              />

              <TextInput
                  style={inputStyle}
                  placeholder="Номер телефона"
                  value={data.phoneNumber}
                  onChange={(text) => handleChange('phoneNumber', text)}
                  keyboardType="phone-pad"
                  error={errors.phoneNumber}
              />

              <TextInput
                  style={inputStyle}
                  placeholder="Пароль"
                  value={data.password}
                  onChange={(text) => handleChange('password', text)}
                  secureTextEntry
                  error={errors.password}
              />

            <View className='pl-[20px] pr-[20px] mt-[7%]'>
              <Button type="filled" onPress={handleSubmit}>Зарегистрироваться</Button>
              <Button type="common" onPress={() => navigation.navigate('Login')} textStyles={{ marginTop: 20 }}>
                Уже есть аккаунт?
              </Button>
            </View>

          </View>
        </PageContainer>
    );
};

// export default RegisterPage;
