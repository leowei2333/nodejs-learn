const express = require('express')

const app = express()

function antiTheftMiddleware(req,res,next) {
  const referer = req.get('referer')
  if(referer) {
    let url = new URL(referer)
    let hostname = url.hostname
    if(hostname !== '127.0.0.1'){
      res.status(404).send('<h1>404 not found</h1>')
      return
    }
  }
  next()
}

app.use(antiTheftMiddleware)

app.use(express.static(__dirname + '/public'))

app.listen(9300, () => {
  console.log('server is runing 9300...');
})