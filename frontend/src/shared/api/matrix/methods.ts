import axios from 'axios';
import {RawMatrix} from "shared/api/matrix/types";

export const getMatrix = async (name: string): Promise<{ status: number, data: RawMatrix | null }> => {
    let res;
    try {
        // (name)
        res = await axios.get(
            process.env.EXPO_PUBLIC_API_URL +
            'matrices' +
            `?filters[name][$eq]=${name}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + process.env.EXPO_PUBLIC_API_TOKEN
                }
            }
        );

        // (res.data);
        if (res.status == 200 && res.data.data.length === 1) {
            return { status: 200, data: res.data.data[0].attributes };
        }
        return {status: 400, data: null}
    } catch (e) {
        console.error(e)
        return {status: 400, data: null}
    }
};


