// 记录每个请求的 url 和 ip 地址

const express = require('express')

const app = express()

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'))

app.get('/client', (req,res) => {
  res.send('前台首页')
})

app.get('/serve', (req,res) => {
  res.send('后台首页')
})

app.get('/setting', (req,res) => {
  res.send('设置')
})

app.get('*', (req,res) => {
  res.send('<h1>404 not found</h1>')
})

app.listen('9300', () => {
  console.log('服务已挂载到9300端口...');
})