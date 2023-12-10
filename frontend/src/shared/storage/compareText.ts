import AsyncStorage from "@react-native-async-storage/async-storage";
import { CompareText } from 'shared/api/compareText';

const compareText = 'compareText';

export const getCompareText = async (): Promise<CompareText | null> => {
  const data = await AsyncStorage.getItem(compareText);
  return data ? JSON.parse(data) : null;
}

export const setCompareText = async (data: CompareText): Promise<void> => {
  await AsyncStorage.setItem(compareText, JSON.stringify(data));
}