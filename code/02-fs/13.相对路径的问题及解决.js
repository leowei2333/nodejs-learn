// 相对路径的参照物并非文件本身，而是命令行的工作目录
// 解决：使用绝对路径
// __dirname 所在文件的所在目录的的绝对路径
console.log(__dirname);

// 示例
const fs = require('fs')
fs.writeFileSync(__dirname + '/美女.txt','love')