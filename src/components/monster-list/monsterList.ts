import axios, {AxiosResponse} from 'axios';

interface DataItem{
    index: string;
    monster: string;
    area: string;
    atk: string;
    def: string;
    hp: string;
    exp: string;
    gold:string;
}

interface DataResponse{
    items: DataItem[]
}

export async function loadJson():Promise<DataItem[]> {
  console.log('load')

  const option = { responseType: 'json' as const }
  
  try{
    const response:AxiosResponse<DataResponse> = await axios.get<DataResponse>('../../../public/monsterlist.json', option)
    return response.data.items;
  } catch (err) {
    console.error('データのロードに失敗しました', err)
    return[]
  }
}
