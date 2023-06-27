const express = require('express')

const app = express()

app.get('/home', (req,res) => {
  res.end('hello express')
})

app.listen('9300', () => {
  console.log('服务已挂载到9300端口...');
})