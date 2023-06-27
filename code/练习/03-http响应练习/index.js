const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  const html = fs.readFileSync('./table.html')
  response.end(html)
})

server.listen(9403, () => {
  console.log('9403服务已启动...');
})  