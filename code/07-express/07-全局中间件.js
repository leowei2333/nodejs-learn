// 记录每个请求的 url 和 ip 地址

const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

// 声明中间件函数
function recordMiddleware(req,res,next) {
  const { url, ip } = req
  fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url}  ${ip}\r\n`)
  next()
}

app.use(recordMiddleware)

app.get('/client', (req,res) => {
  res.send('前台首页')
})

app.get('/serve', (req,res) => {
  res.send('后台首页')
})

app.get('*', (req,res) => {
  res.send('<h1>404 not found</h1>')
})

app.listen('9300', () => {
  console.log('服务已挂载到9300端口...');
})