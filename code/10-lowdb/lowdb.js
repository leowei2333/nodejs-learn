const low = require('lowdb')
const shortid = require('shortid')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')

// 获取 db 对象
const db = low(adapter)

// 初始化数据
// db.defaults({ posts: [], user: [] }).write()

// 写入数据
// db.get('posts').push({id: 2, msg: '今天天气不错'}).write()
// db.get('posts').unshift({id: 0, msg: '今天天气不错'}).write()
db.get('posts').push({id: shortid.generate(), msg: '今天天气不错'}).write()

// 获取数据
// const data = db.get('posts').value()
// console.log(data);

// 删除数据
// 返回值为倍删除数据的集合
// const res = db.get('posts').remove({id: 2}).write()
// console.log(res);

// 更新数据
// 获取单个数据
// const sign = db.get('posts').find({id: 0}).value()
// db.get('posts').find({id: 0}).assign({title: '今天下雨了'}).write()