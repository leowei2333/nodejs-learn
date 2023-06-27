/**
 * fs.readFile() 文件异步读取
 * readFile参数说明
 * @path      文件路径
 * @options   选项设置（可选）
 * @callback  读取回调
 * 返回值     undefined
*/

/**
 * fs.readFileSync() 文件同步读取
 * readFile参数说明
 * @path      文件路径
 * @options   选项设置（可选）
 * 返回值     undefined
*/

const fs = require('fs')
// 异步
fs.readFile('./观书有感.txt', (err,data)=>{
  if(err) {
    console.log('读取失败', err);
    return
  }
  console.log('读取成功', data.toString());
})
// 同步
let data = fs.readFileSync('./观书有感.txt')
console.log('读取成功', data.toString());