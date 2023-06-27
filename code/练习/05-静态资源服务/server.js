const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  const { pathname } = new URL(request.url, 'http://127.0.0.1')
  let root = __dirname + '/file'
  let filePath = root + pathname
  fs.readFile(filePath, (err,data) => {
    if(err) {
      response.statusCode = 500
      response.end('文件读取失败')
      return
    }
    response.end(data)
  })
})

server.listen(9403, () => {
  console.log('9403服务已启动...');
})  