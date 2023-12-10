import { TextContent } from 'shared/api/textContent/types'
import axios from 'axios'
import { setLastFetch, setText } from 'shared/storage'

export const getText = async (title: string): Promise<TextContent | null> => {
  try {
    const res = await axios.get(
        process.env.EXPO_PUBLIC_API_URL + `texts?filters[title][$eq]=${title}`,
        {
          headers: {
            'Authorization': 'Bearer ' + process.env.EXPO_PUBLIC_API_TOKEN
          }
        }
    )

    const data = res.data.data[0].attributes;
    return { title: data.title, content: data.content };
  } catch (e) {
    return null;
  }
}

export const getAllTexts = async (): Promise<TextContent[] | null> => {
  try {
    const res = await axios.get(
        process.env.EXPO_PUBLIC_API_URL + 'texts',
        {
          headers: {
            'Authorization': 'Bearer ' + process.env.EXPO_PUBLIC_API_TOKEN
          }
        }
    )

    const data = res.data.data;
    return data.map((x: any) => x.attributes);
  } catch (e) {
    return null;
  }
}

export const updateAll = async () => {
  const texts = await getAllTexts();
  if (!texts) return;
  for (const s of texts) {
    await setText(s.title, s.content);
  }
  setLastFetch(new Date()).then(r => r);
}