import AsyncStorage from '@react-native-async-storage/async-storage'

export interface StorageUser {
    second_name: string,
    email: string,
    phone_number: string,
    createdA: string,
    updatedAt: string,
    publishedAt: string,
    password: string,
    first_name: string,
    id: string,
    feedback: boolean,
}

export const getUser = async (): Promise<StorageUser | null> => {
    const user = await AsyncStorage.getItem('currentUser');
    if (!user) return null;

    try {
        return JSON.parse(user);
    } catch (e) {
        console.error((e as Error).message)
        return null;
    }

}

export const setUser = async (user: StorageUser | ''): Promise<void> => {
    const stringUser = user ? JSON.stringify(user) : '';
    await AsyncStorage.setItem('currentUser', stringUser);
}
