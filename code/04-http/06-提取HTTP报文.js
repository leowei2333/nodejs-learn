const http = require('http')

const server = http.createServer((request, response) => {
  // 获取请求方法
  console.log(request.method);
  // 获取请求URL
  console.log(request.url);
  // 获取HTTP版本号
  console.log(request.httpVersion);
  // 获取请求头
  console.log(request.headers);
  response.end('HELLO HTTP SERVE !')
})

server.listen(9401, () => {
  console.log('9401服务已启动...');
})