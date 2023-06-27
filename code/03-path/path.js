const fs = require('fs')
const path = require('path')

// path.resolve 拼接规范的绝对路径
const path_01 = path.resolve(__dirname, './index.html')
console.log(path_01);

// path.sep 获取操作系统的路径分隔符
const windows = path.sep
console.log(windows); // (windows \)  (linux /)

// path.parse 解析路径并返回对象
let str = 'D:\\study\\nodejs\\code\\03-path\\path.js'
console.log(path.parse(str));

// path.basename 获取路径的基础名称
const basename = path.basename(str)
console.log(basename);

// path.dirname 获取路径的目录名
const dirname = path.dirname(str)
console.log(dirname);

// path.extname 获取路径的拓展名
const extname = path.extname(str)
console.log(extname);