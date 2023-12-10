import { getLastFetch, getWelcomeText, setLastFetch, setWelcomeText, shouldUpdate } from 'shared/storage'
import { getText, updateAll } from 'shared/api/textContent';

export interface TextSliderProps {
  data: string[]
}

export const getWelcomeTextContent = async (): Promise<string> => {
  const storageData = await getWelcomeText();
  const lastFetch = new Date(await getLastFetch());

  if (!storageData) {
    const res = await getText('welcomeText');
    if (res?.content) {
      await setWelcomeText(res.content);
      await setLastFetch(new Date());
      return res.content;
    }
    return '';
  }

  if (shouldUpdate(lastFetch, new Date())) {
    updateAll().then(r => r)
  }

  return storageData;
}