const express = require('express')
const homeRouter = require('./routers/homeRouter')

const app = express()

app.use(homeRouter)

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