import AsyncStorage from "@react-native-async-storage/async-storage";

const pulseInstruction = 'pulseInstruction';
const welcomeText  = 'welcomeText';

export const shouldUpdate = (prev: Date, next: Date): boolean => {
  return true;
  // return prev.getDate() < next.getDate()
  //     || prev.getMonth() < next.getMonth()
  //     || prev.getFullYear() < next.getFullYear();
}

export const getText = async (name: string): Promise<string> => {
  const data = await AsyncStorage.getItem(name);
  return data || '';
}

export const setText = async (name: string, value: string) => {
  await AsyncStorage.setItem(name, value);
}

export const getPulseInstruction = async (): Promise<string> => {
  return await getText(pulseInstruction);
}

export const setPulseInstruction = async (instruction: string): Promise<void> => {
  await setText(pulseInstruction, instruction);
}

export const getWelcomeText = async (): Promise<string> => {
  return await getText(welcomeText);
}

export const setWelcomeText = async (text: string): Promise<void> => {
  await setText(welcomeText, text);
}