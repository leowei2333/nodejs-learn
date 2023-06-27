const express = require('express')

const app = express()

app.get('/request', (req,res) => {
  // 原生方法
  console.log(req.method);
  console.log(req.url);
  console.log(req.httpVersion);
  console.log(req.headers);

  // express
  console.log(req.path);
  console.log(req.query);
  // 获取ip
  console.log(req.ip);
  // 获取请求头
  console.log(req.get('host'));
  res.end('hello express')
})

app.listen('9300', () => {
  console.log('服务已挂载到9300端口...');
})