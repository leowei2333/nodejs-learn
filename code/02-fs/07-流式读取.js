const fs = require('fs')

const rs = fs.createReadStream('./美女.mp4')

rs.on('data', chunk => {
  console.log(chunk.length);  // 65536字节 => 64kb
})

rs.on('end', () => {
  console.log('读取完成');
})