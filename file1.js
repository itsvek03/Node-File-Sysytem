// fs.open(path,flag,[mode],callback)

// fs.openSync(path,flag,[mode])

const fs = require('fs')

const fileRead = fs.openSync('./flags.txt', 'r')

// const fileRead = fs.open('./flags.txt', 'r', (err, data) => {
//   if (err) {
//     console.log(err.msg) // If file is not present returns the error
//   } else {
//     console.log(data)
//   }`

//   fs.close(data, (err) => {
//     if (err) {
//       console.log('Closing error')
//     } else {
//       console.log('File CLosed !!')
//     }
//   })
// })

fs.stat('./file1.js', (err, data) => {
  console.log(data)
  // Stats {
  //     dev: 2050,
  //     mode: 33204,
  //     nlink: 1,
  //     uid: 1000,
  //     gid: 1000,
  //     rdev: 0,
  //     blksize: 4096,
  //     ino: 140198,
  //     size: 618,
  //     blocks: 8,
  //     atimeMs: 1657543067499.0034,
  //     mtimeMs: 1657543067463.0015,
  //     ctimeMs: 1657543067463.0015,
  //     birthtimeMs: 1657521128911.4846,
  //     atime: 2022-07-11T12:37:47.499Z,
  //     mtime: 2022-07-11T12:37:47.463Z,
  //     ctime: 2022-07-11T12:37:47.463Z,
  //     birthtime: 2022-07-11T06:32:08.911Z
  //   }
})

console.log(fileRead)
