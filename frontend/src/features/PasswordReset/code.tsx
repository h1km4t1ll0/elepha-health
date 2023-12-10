import React, { FC, useEffect, useRef, useState } from 'react';
import { ResetFeatureProps } from 'features/PasswordReset/types';
import { TextInput } from 'shared/ui/TextInput';
import { colorMap } from 'shared/ui/styles/colorMap';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';

export const CodeEnter: FC<ResetFeatureProps> = ({ onSubmit }) => {
  const codeRef = useRef<string | null>(null);
  const [code, setCode] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // запрос к апишке
    codeRef.current = '1234';
  }, []);

  const handleSubmit = () => {
    if (code !== codeRef.current) {
      setError('Неверный под подтверждения');
    } else {
      onSubmit();
    }
  }

  return <>
    <TextInput
        placeholder="Код подтверждения"
        value={code}
        onChange={(text) => setCode(text)}
        keyboardType="phone-pad"
        error={error}
    />

    <Button type="filled" backgroundColor={colorMap.blue} onPress={handleSubmit}>
      <Text type="regular" textStyles={{ textAlign: 'center', color: 'white', }}>
        Подтвердить
      </Text>
    </Button>
  </>
}