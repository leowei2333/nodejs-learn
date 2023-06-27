const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  const { pathname } = new URL(request.url, 'http://127.0.0.1')
  if(pathname === '/'){
    const html = fs.readFileSync(__dirname + '/index.html')
    response.end(html)
  }else if(pathname === '/index.css') {
    const css = fs.readFileSync(__dirname + '/index.css')
    response.end(css)
  }else if(pathname === '/index.js') {
    const js = fs.readFileSync(__dirname + '/index.js')
    response.end(js)
  }else{
    response.statusCode = 404
    response.end('<h1>not found</h1>')
  }
  
})

server.listen(9403, () => {
  console.log('9403服务已启动...');
})  