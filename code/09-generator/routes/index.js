var express = require('express');
const formidable = require('formidable')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload', function(req, res, next) {
  res.render('upload', {});
});

router.post('/upload', function(req, res, next) {
  // 创建 form 对象
  const form = formidable({
    multiples: true,
    // 设置上传文件的保存目录
    uploadDir: __dirname + '/../public/images',
    // 保持文件后缀
    keepExtensions: true,
  })
  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if(err) {
      next(err)
      return
    }
    console.log(fields);
    console.log(files);
    // res.json({ fields, files })
    const url = '/images/' + files.upload.newFilename // 将来将此路径保存在数据库中
    res.send(url);
  })
});


module.exports = router;
