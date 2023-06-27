const http = require('http')

const server = http.createServer((request, response) => {
  // 设置响应状态码
  response.statusCode = 203
  // 设置响应状态的描述
  response.statusMessage = 'i love you'
  // 设置响应头
  response.setHeader('content-type','text/html;charset=utf-8')
  response.setHeader('myheader','love you')
  response.setHeader('test',['a','b','c'])
  // 设置响应体
  response.write('i')
  response.write('love')
  response.write('you')
  response.end()
})

server.listen(9403, () => {
  console.log('9403服务已启动...');
})