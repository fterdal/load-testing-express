const express = require('express')
const volleyball = require('volleyball')
const axios = require('axios')
const app = express()
// const { getTimes } = require('./client')

// app.use(volleyball)

app.get('/', (req, res, next) => {
  res.json({
    message: "Here's your response"
  })
})

let numResponses = 0

const get = async () => {
  // console.log('BEFORE')
  const { data: { message } } = await axios.get('http://localhost:3000/')
  numResponses++
  // console.log('AFTER', message)
}

const getTimes = (times) => {
  return Promise.all(
    '0'.repeat(times).split('').map(get)
  )
}

const getTimesSequential = async (times) => {
  for (let i = 0; i < times; i++) {
    await get()
  }
}

const PORT = 3000
app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`)
  await getTimesSequential(1000)
  console.log('RESPONSES:', numResponses)
})
