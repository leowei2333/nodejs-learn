const http = require('http')
const url = require('url')

const server = http.createServer((request, response) => {
  const res = url.parse(request.url, true) // 第二个参数 true 是将传参以对象的形式返回
  console.log('res', res);
  response.end('hello')
})

server.listen(9403, () => {
  console.log('9403服务已启动...');
})