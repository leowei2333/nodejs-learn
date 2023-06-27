const express = require('express')

const app = express()

app.get('/other', (req,res) => {
  // 跳转响应
  // res.redirect('http://www.baidu.com')

  // 下载响应
  // res.download(__dirname + '/package.json')

  // json响应
  // res.json({
  //   name: 'express',
  //   slogon: '一个人哭真爱无敌'
  // })

  // 响应文件内容
  res.sendFile(__dirname + '/test.html')
})

app.listen('9300', () => {
  console.log('服务已挂载到9300端口...');
})