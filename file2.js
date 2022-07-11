// fs.read(fd, buffer, offset, length, position, callback)
// fs.readSync(fd, buffer, offset, length, position)

// Step 1: -> Open  the file
// Step 2: -> Then read the file
// Step 3 :-> Close the file

const fs = require('fs')

const fileStat = fs.statSync('./file1.js').size
const Buf = new Buffer.alloc(fileStat)

fs.open('./flags.txt', 'r+', (err, fd) => {
  if (err) {
    console.log(err.message)
  } else {
    // Read the file
    fs.read(fd, Buf, 0, fileStat, 0, (err, bytes) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Data is ', bytes)
        console.log(Buf.toString())
      }
    })

    fs.close(fd, (err) => {
      if (err) {
        console.log('Error while closing the file')
      }
      console.log('File has been closed')
    })
  }
})
