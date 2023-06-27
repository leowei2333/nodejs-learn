const express = require('express')

const app = express()

app.get('/home', (req,res) => {
  res.end('hello express')
})

// get
app.get('/', (req,res) => {
  res.end('home')
})

// post
app.post('/login', (req,res) => {
  res.end('login')
})

// 匹配所有方法
app.all('/test', (req,res) => {
  res.end('test')
})

// 404 响应
app.all('*', (req,res) => {
  res.end('404')
})

app.listen('9300', () => {
  console.log('服务已挂载到9300端口...');
})