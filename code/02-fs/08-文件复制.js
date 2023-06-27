// 复制 美女.mp4

const fs = require('fs')
const process = require('process')
// 方式1
let data = fs.readFileSync('./美女.mp4')
fs.writeFileSync('./美女copy.mp4', data)
console.log(process.memoryUsage()); // 查看内存占用量 rss/整个占用内存大小  25071616字节

// 方式2
const rs = fs.createReadStream('./美女.mp4')
const ws = fs.createWriteStream('./美女copy2.mp4')
rs.on('data', chunk => {
  ws.write(chunk)
})
rs.on('end', () => {
  console.log(process.memoryUsage()); // 查看内存占用量 rss/整个占用内存大小  25456640字节
})

// 方式2简写
rs.pipe(ws)