const express = require('express')
const volleyball = require('volleyball')
const app = express()

app.use(volleyball)

app.get('/', (req, res, next) => {
  res.json({
    message: "Here's your response"
  })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
