const http = require('http')

const server = http.createServer((request, response) => {
  let body = ''
  request.on('data', chunk => {
    body += chunk
  })
  request.on('end', () => {
    console.log('body', body);
    response.end('hello')
  })
})

server.listen(9402, () => {
  console.log('9402服务已启动...');
})