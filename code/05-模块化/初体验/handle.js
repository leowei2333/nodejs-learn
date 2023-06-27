function tiemo() {
  console.log('贴膜...');
}

function xijiao() {
  console.log('洗脚...');
}
// 方式一
// module.exports = {
//   tiemo,
//   xijiao,
// };

// 方式二
exports.tiemo = tiemo;
exports.xijiao = xijiao;

// exports = module.exports = {}