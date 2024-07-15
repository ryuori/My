import axios from 'axios'

export function loadJson() {
  console.log('load')

  const option = { responseType: 'json' }
  return axios
    .get('../../../public/monsterlist.json', option)
    .then((res) => {
      return res.data.items
    })
    .catch((err) => {
      console.log('データのロードに失敗しました', err)
      return []
    })
}
