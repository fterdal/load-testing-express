const axios = require('axios')

const get = async (responses) => {
  try {
    await axios.get('http://localhost:3000/')
    responses.counter++
    if (responses.counter % 10 === 0) {
      console.log(responses.counter)
    }
  } catch (err) {
    console.log(err.message)
  }
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
