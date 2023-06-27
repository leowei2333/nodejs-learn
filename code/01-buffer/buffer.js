/**
 * buffer
 * 缓冲器
*/

// 创建buffer
// 1.alloc
let buf = Buffer.alloc(10)
console.log("buf",buf);
// 2.allocUnsafe
let buf_2 = Buffer.allocUnsafe(10)
console.log("buf_2",buf_2);
// 3.from
let buf_3 = Buffer.from('hello world')
console.log("buf_3",buf_3);
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log("buf_4",buf_4);


// buffer与字符串的转换
let bufStr = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log(bufStr.toString()); // 默认以utf-8的编码格式转换

// buffer是以数组的形式存储的
let bufStr_1 = Buffer.from('hello world') 
console.log(bufStr_1[0].toString(2)); // 01101000

// 修改
console.log(bufStr_1);
bufStr_1[0] = 95;
console.log(bufStr_1);
console.log(bufStr_1.toString());

// 溢出
let buf_5 = Buffer.from('hello world') 
buf_5[0] = 361  // 二进制最大区间为255 舍弃高位数字
console.log(buf_5);

// 中文
let buf_6 = Buffer.from('你好') // utf-8 一个中文占三个字节
console.log(buf_6);