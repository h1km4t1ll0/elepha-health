import AsyncStorage from "@react-native-async-storage/async-storage";

const lastFetch = 'lastFetch';

export const getLastFetch = async (): Promise<string> => {
  const date = await AsyncStorage.getItem(lastFetch);
  return date || '1970-01-01 00:00:00 UTC+00';
}

export const setLastFetch = async (date: Date): Promise<void> => {
  await AsyncStorage.setItem(lastFetch, date.toDateString());
}