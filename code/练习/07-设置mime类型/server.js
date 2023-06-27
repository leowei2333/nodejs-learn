const http = require('http')
const fs = require('fs')
const path = require('path')

const mimes = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  png: 'image/png',
  jpg: 'image/jpeg',
  gif: 'image/gif',
  mp4: 'video/mp4',
  mp3: 'audio/mpeg',
  json: 'application/json'
}

const server = http.createServer((request, response) => {
  if(request.method !== 'GET') {
    response.statusCode = 405
    response.end('<h1>请求方法错误</h1>')
    return
  }
  const { pathname } = new URL(request.url, 'http://127.0.0.1')
  let root = __dirname + '/file'
  let filePath = root + pathname
  fs.readFile(filePath, (err,data) => {
    if(err) {
      response.setHeader('content-type', 'text/html;charset=utf-8')
      switch(err.code) {
        case 'ENOENT':
          response.statusCode = 404
          response.end('<h1>文件未找到</h1>')
          break
        case 'EPERM':
          response.statusCode = 403
          response.end('<h1>禁止访问</h1>')
          break
        default:
          response.statusCode = 500
          response.end('<h1>服务器内部错误</h1>')
      }
      return
    }
    let ext = path.extname(filePath).slice(1)
    console.log(ext);
    let type = mimes[ext]
    if(type) {
      if(ext === 'html') {
        response.setHeader('content-type',type + ';charset=utf-8')
      }else{
        response.setHeader('content-type',type)
      }
    }else{
      response.setHeader('content-type', 'application/octet-stream')
    }
    response.end(data)
  })
})

server.listen(9403, () => {
  console.log('9403服务已启动...');
})  