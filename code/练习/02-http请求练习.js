const http = require('http')
const url = require('url')

const server = http.createServer((request, response) => {
  response.setHeader('content-type','text/html;charset=utf-8')
  const { method } = request
  const { pathname } = new URL(request.url, 'http://127.0.0.1')
  console.log(method, pathname);
  if( method === 'GET' && pathname === '/login' ) {
    response.end('登录页面')
  } else if ( method === 'GET' && pathname === '/register' ) {
    response.end('注册页面')
  } else {
    response.end('page is not found')
  }
})

server.listen(9403, () => {
  console.log('9403服务已启动...');
})