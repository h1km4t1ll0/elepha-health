import axios from 'axios';
import { CompareText } from 'shared/api/compareText/types';

export const getCompareText = async (): Promise<{ status: number, data: CompareText | null }> => {
  try {
    const { data } = await axios.get(
        process.env.EXPO_PUBLIC_API_URL + 'compare-text',
        {
          headers: {
            'Authorization': 'Bearer ' + process.env.EXPO_PUBLIC_API_TOKEN
          }
        }

    );

    return { status: 400, data: data.data.attributes }
  } catch (e) {
    console.error(e)
    return { status: 400, data: null }
  }
};


