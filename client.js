const axios = require('axios')

const get = async () => {
  console.log('BEFORE')
  const { data: { message } }  = await axios.get('http://localhost:3000/')
  console.log('AFTER', message)
}

const getTimes = (times) => {
  return Promise.all(
    '0'.repeat(times).split('').map(get)
  )
}

module.exports = {
  get,
  getTimes,
}
