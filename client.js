const axios = require('axios')

const get = async (responses) => {
  await axios.get('http://localhost:3000/')
  responses.counter++
}

const getTimesParallel = (times, responses) => {
  return Promise.all(
    '0'.repeat(times).split('').map(() => get(responses))
  )
}

const getTimesSequential = async (times, responses) => {
  for (let i = 0; i < times; i++) {
    await get(responses)
  }
}

module.exports = {
  get,
  getTimesParallel,
  getTimesSequential,
}
