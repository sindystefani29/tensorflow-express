const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/cat.jpg', (req, res) => {
  res.sendFile(path.join(__dirname + '/cat.jpg'));
})

app.get('/client.js', (req, res) => {
  res.sendFile(path.join(__dirname + '/client.js'));
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})