const express = require('express')

const app = express()

app.get('/:id.html', (req,res) => {
  console.log(req.params.id);
  res.setHeader('content-type','text/html;charset=utf-8')
  res.end('商品详情')
})

app.listen('9300', () => {
  console.log('服务已挂载到9300端口...');
})