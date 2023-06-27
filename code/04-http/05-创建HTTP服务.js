const http = require('http')

const server = http.createServer((request, response) => {
  response.end('HELLO HTTP SERVE !')
})

server.listen(9400, () => {
  console.log('9400服务已启动...');
})