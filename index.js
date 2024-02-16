const express = require('express')
const app = express()
const port = 3001


app.get('/', (req, res) => {
  res.send('Hello third backend!')
})


app.get('/a', (req, res) => {
  res.send('Third: A!')
})

app.get('/b', (req, res) => {
    res.send('Third: B!')
  })
  

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})