var express = require('express');
const low = require('lowdb')
const shortid = require('shortid')
var router = express.Router();
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../data/db.json')
const db = low(adapter)

/* 记账本列表 */
router.get('/book', function(req, res, next) {
  const data = db.get('accounts').value()
  res.render('list',{accounts: data})
});

/* 新增记录 */
router.post('/book', function(req, res, next) {
  const id = shortid.generate()
  db.get('accounts').unshift({id: id, ...req.body}).write()
  res.render('success',{msg: '添加成功', url: '/book'})
});

/* 添加记录 */
router.get('/book/add', function(req, res, next) {
  res.render('add')
});
module.exports = router;
