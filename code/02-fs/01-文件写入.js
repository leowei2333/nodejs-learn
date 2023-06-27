/**
 * fs.writeFile() 文件异步写入
 * writeFile参数说明
 * @file      文件名
 * @data      待写入的数据
 * @options   选项设置（可选）
 * @callback  写入回调
 * 返回值     undefined
*/

/**
 * fs.writeFileSync() 文件同步写入
 * writeFileSync参数说明
 * @file      文件名
 * @data      待写入的数据
 * @options   选项设置（可选）
 * 返回值     undefined
*/

const fs = require('fs')
// 异步
fs.writeFile( './座右铭.txt', '三人行，则必有我师；', res=>{
  // 写入失败：res = 错误对象
  // 写入成功：res = null
  if(res){
    console.log('写入失败', res);
    return
  }
  console.log('写入成功', res);
} )
// 同步
fs.writeFileSync( './座右铭.txt', '\r\n同步写入在前面；')

