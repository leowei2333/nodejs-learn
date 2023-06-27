// \r\n实现写入换行
/**
 * fs.appendFile() 文件异步追加写入
 * appendFile参数说明
 * @file      文件名
 * @data      待写入的数据
 * @options   选项设置（可选）
 * @callback  写入回调
 * 返回值     undefined
*/

/**
 * fs.appendFileSync() 文件同步追加写入
 * appendFileSync参数说明
 * @file      文件名
 * @data      待写入的数据
 * @options   选项设置（可选）
 * 返回值     undefined
*/

const fs = require('fs')
// 异步
fs.appendFile( './座右铭.txt', '\r\n其不善者而改之；', res=>{
  if(res){
    console.log('写入失败', res);
    return
  }
  console.log('写入成功', res);
} )
// 同步
fs.appendFileSync( './座右铭.txt', '\r\n择其善者而从之；' )

// writeFile实际上也可以实现追加写入的效果
// flag: 'a' 表示追加写入
fs.writeFile( './座右铭.txt', '\r\n异步写入在后面；', { flag: 'a' }, res=>{
  if(res){
    console.log('写入失败', res);
    return
  }
  console.log('写入成功', res);
} )
fs.writeFileSync( './座右铭.txt', '\r\n同步写入在前面；', { flag: 'a' }, )