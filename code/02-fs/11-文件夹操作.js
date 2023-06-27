/**
 * fs.mkdir() 文件夹异步创建
 * mkdir参数说明
 * @path      文件夹路径
 * @options   选项设置（可选）
 * @callback  操作回调
*/
/**
 * fs.mkdirSync() 文件夹同步创建
 * mkdirSync参数说明
 * @path      文件夹路径
 * @options   选项设置（可选）
*/


/**
 * fs.readdir() 异步读取文件夹
 * readdir参数说明
 * @path      文件夹路径
 * @callback  操作回调
*/
/**
 * fs.readdirSync() 同步读取文件夹
 * readdirSync参数说明
 * @path      文件夹路径
*/

/**
 * fs.rmdir() 文件夹异步删除(不推荐使用，即将在后版本删除，推荐使用 rm ，参数同 )
 * rmdir参数说明
 * @path      文件夹路径
 * @options   选项设置（可选）
 * @callback  操作回调
*/
/**
 * fs.rmdirSync() 文件夹同步删除
 * rmdirSync参数说明
 * @path      文件夹路径
 * @options   选项设置（可选）
*/

const fs = require('fs')

// 创建文件夹====================================================================================================

// 单个创建
// fs.mkdir('./html', res => {
//   if(res){
//     console.log('创建失败', res);
//     return
//   }
//   console.log('创建成功', res);
// })
// fs.mkdirSync('./css')

// 递归创建 {recursive: true}
// fs.mkdir('./a/b/c', { recursive: true }, res => {
//   if(res){
//     console.log('创建失败', res);
//     return
//   }
//   console.log('创建成功', res);
// })
// fs.mkdirSync('./d/e/f', { recursive: true } )

// 读取文件夹====================================================================================================

// fs.readdir('./html', (err,data) => {
//   if(err){
//     console.log('读取失败', err);
//     return
//   }
//   console.log('读取成功', data);
// })
// const data = fs.readdirSync('./html')
// console.log(data);

// 删除文件夹====================================================================================================

// 单个删除 只能删除空文件夹
// fs.rmdir('./css', res => {
//   if(res){
//     console.log('删除失败', res);
//     return
//   }
//   console.log('删除成功', res);
// })
// fs.rmdirSync('./test')

// 递归删除 {recursive: true} 不推荐使用，即将删除
// fs.rmdir('./a', { recursive: true }, res => {
//   if(res){
//     console.log('删除失败', res);
//     return
//   }
//   console.log('删除成功', res);
// })
// fs.rmdirSync('./d', { recursive: true })

// rm 推荐使用
// fs.rm('./a', { recursive: true }, res => {
//   if(res){
//     console.log('删除失败', res);
//     return
//   }
//   console.log('删除成功', res);
// })