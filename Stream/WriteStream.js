// pipe() Method. The readable. pipe() method in a Readable Stream is used to attach a Writable stream to the readable stream so that it consequently
// switches into flowing mode and then pushes all the data that it has to the attached Writable
// fs.createWriteStream(path, options)

const fs = require('fs')

const data =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ultricies quam. Mauris et sagittis eros. In egestas felis nec varius volutpat. Quisque porta leo id quam vestibulum efficitur. Fusce lorem nulla, semper et hendrerit vitae, egestas a lectus '

let writeStr = fs.createWriteStream('./dataCopy.txt')
let readStr = fs.createReadStream('./data.txt')

// How to write the data
// writeStr.write(data, (err, data) => {
//   if (err) {
//     console.log(err.message)
//   } else {
//     console.log('File written ')
//   }
// })

// copy the file
readStr.pipe(writeStr)

// Read the file from readStr and paste the writeStr
