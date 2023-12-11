import React, { FC, useState } from 'react';
import { EmailEnter, CodeEnter, ChangePassword } from 'features/PasswordReset';
import { changePassword, userExists } from 'shared/api'
import { showErrorToast } from 'shared/ui/Toast/toasts';
export const ResetWidget: FC<{ navigation: { navigate: Function } }> = ({ navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

  const onEmailSubmit = async (data: string) => {
    const isRealUser = await userExists(data);

    if (isRealUser) {
      setEmail(data);
    } else {
      showErrorToast('Email не существует');
    }
  };

  const onCorrectCode = () => {
    setCanSubmit(true);
  }

  const onPasswordChange = async (password: string) => {
    const res = await changePassword(password, email);
    if (res) {
      navigation.navigate('Login');
    } else {
      showErrorToast('Попробуйте позже');
    }
  }

  if (!email) {
    return <EmailEnter onSubmit={onEmailSubmit} />
  } else if (!canSubmit) {
    return <CodeEnter onSubmit={onCorrectCode} />
  } else {
    return <ChangePassword onSubmit={onPasswordChange} />
  }
}