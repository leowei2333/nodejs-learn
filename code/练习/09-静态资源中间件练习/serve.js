const express = require('express')

const app = express()

app.use(express.static(__dirname + '/public'))

app.listen('9300', () => {
  console.log('服务已挂载到9300端口...');
})