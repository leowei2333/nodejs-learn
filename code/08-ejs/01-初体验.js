const ejs = require('ejs')
const fs = require('fs')

const html = fs.readFileSync('./01-初体验.html').toString()

const china = '中国'

const weather = '2023/7/3 晴'

// 使用 ejs 渲染
let res = ejs.render(html, {china: china, weather})
console.log(res);