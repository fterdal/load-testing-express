const express = require('express')
const volleyball = require('volleyball')
const app = express()
const { getTimesParallel, getTimesSequential } = require('./client')

// app.use(volleyball)

app.get('/', (req, res, next) => {
  // next("OOOPS")
  res.json({
    message: "Here's your response"
  })
})

app.use((err, req, res, next) => {
  console.log('ERR', err)
  res.sendStatus(500)
})

let responses = { counter: 0 }

const PORT = 3000
app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`)
  await getTimesParallel(800, responses)
  console.log('RESPONSES:', responses.counter)
})
