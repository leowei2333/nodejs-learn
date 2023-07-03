const express = require('express')
const path = require('path')

const app = express()
// 设置模板引擎
// ejs 只是 nodejs 模板引擎中的其中一种（ pug, twing ）
app.set('view engine', 'ejs')
// 设置模板文件存放位置
app.set('views', path.resolve(__dirname, './views'))

app.get('/home', (req,res) => {
  const title = 'hello ejs 模板引擎'
  // res.render('模板文件名', 模板使用到的变量)
  res.render('home', {title})
})

app.listen(9300, () => {
  console.log('server is runing 9300...');
})