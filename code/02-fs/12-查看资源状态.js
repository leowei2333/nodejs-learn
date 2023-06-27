const fs = require('fs')

fs.stat('./美女copy2.mp4', (err,data) => {
  if(err) {
    console.log('操作失败', err);
    return
  }
  console.log('操作成功', data);
  // 检测目标是否为文件
  console.log(data.isFile());
  // 检测目标是否为文件夹
  console.log(data.isDirectory());
})