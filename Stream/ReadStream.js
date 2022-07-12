// fs.createReadStream(path, options)

//options:{   are optional
//     flags:'r',
//     encoding,
//     fd,
//     autoClose:true
// }

const fs = require('fs')

const readStream = fs.createReadStream('../flag.txt', {
  flag: 'a+',
  encoding: 'UTF-8',
  start: 5,
  end: 64,
})

readStream.on('data', (data) => {
  if (data.indexOf('is') === -1) {
    console.log(data.toString())
  } else {
    console.log(data.toString().toUpperCase())
  }
})

// on data -> Read the data
