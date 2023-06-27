/**
 * fs.unlink() 文件异步删除
 * unlink参数说明
 * @path      文件路径
 * @callback  操作回调
*/

/**
 * fs.unlinkSync() 文件同步删除
 * unlinkSync参数说明
 * @path      文件路径
*/

const fs = require('fs')
fs.unlink( './观书有感.txt', res=>{
  if(res){
    console.log('删除失败', res);
    return
  }
  console.log('删除成功', res);
} )
fs.unlinkSync('./座右铭.txt')

// nodejs 14.4 新增 rm 方法删除文件
fs.rm( './美女.mp4', res => {
  if(res){
    console.log('删除失败', res);
    return
  }
  console.log('删除成功', res);
})
fs.rmSync('./美女copy.mp4')