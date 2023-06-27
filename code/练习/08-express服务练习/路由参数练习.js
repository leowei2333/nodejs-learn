const express = require('express')
const { singers } = require('./singers.json')

const app = express()

app.get('/singer/:id', (req,res) => {
  let { id } = req.params
  console.log(id);
  console.log(singers);

  const result = singers.find(i=>i.singer_id === id)
  // console.log(result);
  if(result) {
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>${result.name}</h1>
      <h1>${result.other_name}</h1>
      <img src="${result.pic}" />
    </body>
    </html>
    `)
  }else{
    res.statusCode = 404
    res.end('<h1>404 not found</h1>')
  }
})

app.listen('9300', () => {
  console.log('服务已挂载到9300端口...');
})