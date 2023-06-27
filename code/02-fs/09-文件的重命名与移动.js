/**
 * fs.rename() 文件重命名与移动异步
 * rename参数说明
 * @oldPath   文件当前路径
 * @newPath   文件新路径
 * @callback  操作回调
*/

/**
 * fs.renameSync() 文件重命名与移动同步
 * renameSync参数说明
 * @oldPath   文件当前路径
 * @newPath   文件新路径
*/

const fs = require('fs')
// 重命名
fs.rename('./座右铭.txt', './论语.txt', res => {
  if(res){
    console.log('操作失败', res);
    return
  }
  console.log('操作成功', res);
})
fs.renameSync('./论语.txt', './座右铭.txt',)

// 移动
fs.rename('./论语.txt', '../01-buffer/论语.txt', res => {
  if(res){
    console.log('操作失败', res);
    return
  }
  console.log('操作成功', res);
})

fs.renameSync('./座右铭.txt', '../01-buffer/论语.txt')