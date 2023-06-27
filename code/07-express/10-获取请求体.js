const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// 解析 json 格式的请求体的中间件
const jsonParser = bodyParser.json()

// 解析 querystring 格式请求体的中间件
const urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/login', (req,res) => {
  res.sendFile(__dirname + '/login.html')
})

app.post('/login',urlencodedParser, (req,res) => {
  console.log(req.body);
  res.send('获取用户数据')
})

app.listen(9300, () => {
  console.log('server is runing 9300...');
})