// 在导入模块时建议使用相对路径，且 ./ ../ 不能省略

// 若导入的路径是一个文件夹
// 则会首先检测该文件夹下 package.json 文件中的 main 属性对应的文件或文件夹下的 index.js / index.json 文件
// 若存在则导入，若不存在则报错
const me = require('./handle')

me.tiemo()
me.xijiao()

const app = require('./module')
console.log(app);