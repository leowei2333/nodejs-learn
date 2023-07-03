const ejs = require('ejs')
const fs = require('fs')

const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙悟净']

const html = fs.readFileSync('./02-西游.html').toString()

const result = ejs.render(html,{xiyou: xiyou})

// const result = ejs.render(`
//   <ul>
//     <% xiyou.forEach(item=>{ %>
//       <li><%= item %></li>
//     <% }) %>
//   </ul>
//   `, {xiyou: xiyou})

console.log(result);