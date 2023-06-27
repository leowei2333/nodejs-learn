const express = require('express')

const router = express.Router()

router.get('/client', (req,res) => {
  res.send('前台首页')
})

router.get('/search', (req,res) => {
  res.send('搜索')
})

module.exports = router