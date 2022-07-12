//fs.mkdir(path, mode, callback)

const fs = require('fs')
const dirNames = {
  dir: 'newDir',
  async: 'asncCreatedDir',
}

const demo = fs.mkdirSync(dirNames.dir)
console.log(demo)
