import React, { FC, useState } from 'react';
import { ResetFeatureProps } from 'features/PasswordReset/types';
import { colorMap } from 'shared/ui/styles/colorMap';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { TextInput } from 'shared/ui/TextInput';
import { validate } from 'shared/validation';
import { emailValidation } from 'features/PasswordReset/validations';


export const  EmailEnter: FC<ResetFeatureProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (value: string) => {
    const errors = validate(emailValidation, { email: value }) as { email: string };
    if (errors) setError(errors.email);
    setEmail(value);
  }

  const handleSubmit = () => {
    if (email === null || error) return;
    onSubmit(email);
  }

  return <>
    <TextInput
        style={{ width: '100%' }}
        placeholder="Email"
        value={email}
        onChange={(text) => handleChange(text)}
        keyboardType="email-address"
        autoCapitalize="none"
        error={error}
    />

    <Text type='small' textStyles={{ textAlign: 'center', marginBottom: '20%' }}>
      На эту почту вышлем Вам письмо с инструкциями
    </Text>

    <Button type="filled" onPress={handleSubmit}>
        Продолжить
    </Button>
  </>
}