// fs.readdir(path[,options],callback)  // Returns the file present in the directory

const fs = require('fs')

let directory = '../../FileSystem' // Give the directory address not the file

let bufferDir = Buffer.from(directory)

// const readDir = fs.readdirSync(directory)
// console.log(readDir)

fs.readdir(directory, (err, fd) => {
  if (err) {
    console.log(err)
  } else {
    console.log(fd)
  }
})

// Output
//[
//     '.git',
//     'Directory',
//     'file1.js',
//     'file2.js',
//     'flag.txt',
//     'flags.txt',
//     'readFile.js',
//     'write.js',
//     'writeFile.js'
//   ]
