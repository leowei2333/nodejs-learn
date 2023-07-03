const ejs = require('ejs')
const fs = require('fs')

const isLogin = true

const html = fs.readFileSync('./03-登录校验.html').toString()

const result = ejs.render(html,{isLogin: isLogin})

console.log(result);