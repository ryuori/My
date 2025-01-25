import axios, {AxiosResponse} from 'axios';

interface DataItem{
    id: string;
    name: string;
    hp: string;
    mp: string;
    attack: string;
    defense: string;
    drop: string[];
}

interface DataResponse{
    items: DataItem
}

export async function loadJson(): Promise<DataItem[]> {
  console.log('load')

  const option = { responseType: 'json' as const };
  try {
    const response: AxiosResponse<DataResponse> = await axios.get<DataResponse>('../../../public/data.json', option)
    return response.data.items;
  } catch (err) {
    console.error('データのロードに失敗しました', err)
    return [];
  }
}
