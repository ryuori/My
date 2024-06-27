const { default: axios } = require('axios')

function loadJson() {
  console.log('load')

  const option = { responseType: 'blob' }
  axios
    .get('data.json', option)
    .then((res) => {})
    .catch((err) => {})
}
