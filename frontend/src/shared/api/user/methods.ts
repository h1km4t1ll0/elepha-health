import axios from 'axios';
import { StorageUser } from 'shared/storage';
import { RegisterData } from 'shared/api';

export const login = async (email: string, password: string): Promise<StorageUser | null> => {
    let res;
    try {
        res = await axios.get(
            process.env.EXPO_PUBLIC_API_URL +
            'elepha-users' +
            `?filters[email][$eq]=${email}&filters[password][$eq]=${password}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + process.env.EXPO_PUBLIC_API_TOKEN
                }
            }
        );

        return {id: res.data.data[0].id, ...res.data.data[0].attributes};
    } catch (e) {
        console.error(e);
        return null;
    }
};

export const register = async (data: RegisterData): Promise<StorageUser | null> => {
    let res;
    try {
        res = await axios.post(
            process.env.EXPO_PUBLIC_API_URL + 'elepha-users/',
            {
                data: {
                    first_name: data.firstName,
                    second_name: data.lastName,
                    email: data.email,
                    password: data.password,
                    phone_number: data.phoneNumber,
                },
            },
            {
                headers: {
                    'Authorization': 'Bearer ' + process.env.EXPO_PUBLIC_API_TOKEN
                }
            }
        );

        return {id: res.data.data.id, ...res.data.data.attributes};
    } catch (e) {
        console.error(e);
        return null;
    }
};

export const updateUser = async (data: Partial<StorageUser>, id: string): Promise<boolean> => {
    try {
        await axios.put(
            process.env.EXPO_PUBLIC_API_URL + 'elepha-users' + `/${id}`,
            { data },
            {
                headers: {
                    'Authorization': 'Bearer ' + process.env.EXPO_PUBLIC_API_TOKEN
                }
            }
        );
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

export const userExists = async (email: string): Promise<boolean> => {
    try {
        const res = await axios.get(
            process.env.EXPO_PUBLIC_API_URL +
            'elepha-users' +
            `?filters[email][$eq]=${email}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + process.env.EXPO_PUBLIC_API_TOKEN
                }
            }
        );

        return !!res.data.data[0].attributes;
    } catch (e) {
        return false;
    }
}

export const changePassword = async (newPassword: string, email: string): Promise<boolean> => {
    try {
       await axios.put(
            process.env.EXPO_PUBLIC_API_URL + `elepha-users?filters[email][$eq]=${email}`,
            { data: { password: newPassword } },
            {
                headers: {
                    'Authorization': 'Bearer ' + process.env.EXPO_PUBLIC_API_TOKEN
                }
            }
        );

        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};
