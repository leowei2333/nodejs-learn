const express = require('express')

const app = express()

app.get('/response', (req,res) => {
  // 原生响应
  // res.statusCode = 404
  // res.statusMessage = 'love'
  // res.setHeader('xxx', 'yyy')
  // res.write('hello express')
  // res.end('response')

  // express 响应
  // res.status(500)
  // res.set('aaa', 'bbb')
  // res.send('你好 express')
  res.status(500).set('aaa', 'bbb').send('链式调用')
})

app.listen('9300', () => {
  console.log('服务已挂载到9300端口...');
})