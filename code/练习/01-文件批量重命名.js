const fs = require('fs')

const files = fs.readdirSync('../02-fs')

files.forEach((oldFIleName)=>{
  const [ num, name ] = oldFIleName.split('-')
  console.log(num, name);
  if(Number(num) < 10) {
    newFileName = '0' + oldFIleName
    fs.renameSync(`../02-fs/${oldFIleName}`, `../02-fs/${newFileName}`)
  }
})