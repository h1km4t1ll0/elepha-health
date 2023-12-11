import React, { FC } from 'react';
import { ModalTextList } from 'shared/ui/TextList/modalTextList';

const data = `✓ Самостоятельный замер пульса
✓ Три аудиоматрицы, корректирующие работу нервной системы
✓ Подбор аудиоматриц на основе ваших физиологических показателей
✓ Рекомендации по восстановлению здоровья`

export const LiveVersion: FC = () => {
  return <ModalTextList items={data.split('\n')} />
}