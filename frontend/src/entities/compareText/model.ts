import { CompareText } from 'shared/api/compareText';
import { getCompareText as getStorageData, setCompareText } from 'shared/storage';
import { getCompareText as fetchData } from 'shared/api/compareText';

export const getCompareText = async (key: keyof CompareText): Promise<string> => {
  const storageData = await getStorageData();

  if (!storageData) {
    const res = await fetchData();
    if (res?.data) {
      await setCompareText(res.data);
      return res.data[key] || '';
    }
    return '';
  }

  fetchData().then(res => res.data && setCompareText(res.data));

  return storageData[key];
}