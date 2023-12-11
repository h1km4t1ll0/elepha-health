import { getText, updateAll } from 'shared/api/textContent';
import { getPulseInstruction, setPulseInstruction, shouldUpdate } from 'shared/storage';
import { getLastFetch, setLastFetch } from 'shared/storage/lastFetch';

export const getInstruction = async (): Promise<string> => {
  const storageData = await getPulseInstruction();
  const lastFetch = new Date(await getLastFetch());

  if (!storageData) {
    const res = await getText('pulseInstruction');
    if (res?.content) {
      await setPulseInstruction(res.content);
      await setLastFetch(new Date());
      return res.content;
    }
    return 'Не удалось загрузить инструкцию по измерению пульса';
  }

  // if (shouldUpdate(lastFetch, new Date())) {
  //   updateAll().then(r => r)
  // }
  updateAll().then(r => r)

  return storageData;
}
