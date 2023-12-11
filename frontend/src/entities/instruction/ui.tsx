import React, { FC, useEffect, useState } from 'react';
import { Text } from 'shared/ui/Text';
import { getInstruction } from 'entities/instruction/model';
import { TextList } from 'shared/ui/TextList';

export const PulseInstruction: FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const res = await getInstruction();
      setData(res);
    })();
  }, []);

  if (!data)
    return <>
      <Text type="big">
        Загрузка...
      </Text>
    </>

  return <TextList items={data.split('\n')} />
}